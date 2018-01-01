<template>
  <section> 
    <transition name="slide-fade">
      <cg-popup v-if="show" @close-dialog="close"></cg-popup>
    </transition>
    <input  class="controls" type="text" @change="getGeoByAddress" placeholder="Search Box" ref="googleSearch">    
    <div class="google-map" :id="mapName"></div>
  </section>
</template>
<script>
import {
  GET_SELCTED_GAME,
  SET_SELECTED_GAME,
  GET_GAMES
} from "../store/modules/game/Game.module";
import MapService from "../service/map/MapService";
import CgPopup from "../components/CgPopup";
import { SET_CURR_ADDERSS } from "../store/modules/map/Map.module";

export default {
  name: "google-map",
  data: function() {
    return {
      // currAddress: null,
      show: false,
      mapName: this.name + "-map",
      map: null,
      bounds: null,
      tempMarker: null,
      // markers: [],
      searchBox: null
      // searchLocation: {
      //   latitude: 51.501527,
      //   longitude: -0.1921837
      // },
    };
  },
  created() {
    this.tempMarker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      draggable: false,
      map: this.map
    });
    let self = this
    this.tempMarker.addListener("click", function(e) {
      self.show = !self.show;
    });
  },
  mounted: function() {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    
    const mapCentre = this.games[0];

    const options = {
      center: new google.maps.LatLng(
        mapCentre.location.lat,
        mapCentre.location.lng
      )
    };
    this.map = new google.maps.Map(element, options);
    this.tempMarker.setMap(this.map);
    var input = this.$refs.googleSearch;
    this.searchBox = new google.maps.places.SearchBox(input);
    this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

    this.games.forEach(coord => {
      const position = new google.maps.LatLng(
        coord.location.lat,
        coord.location.lng
      );
      const marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position,
        map: this.map
      });
      // this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position));
    });
  },
  watch: {
    selctedGame() {
      if (!this.selctedGame) return;
      var lat = this.selctedGame.location.lat;
      var lng = this.selctedGame.location.lng;
      this.map.panTo(new google.maps.LatLng(lat, lng));
    }
  },
  computed: {
    selctedGame() {
      return this.$store.getters[GET_SELCTED_GAME];
    },
    games() {
      return this.$store.getters[GET_GAMES];
    }
  },
  methods: {
    getGeoByAddress(e) {
      MapService.getGeoByAddress(e).then(res => {
        this.map.setZoom(16);
        this.map.panTo(new google.maps.LatLng(res.lat, res.lng));
        this.$store.commit({
          type: SET_CURR_ADDERSS,
          address: res
        });        
        this.tempMarker.setPosition(res.postion);
      });
    },
    close() {
      this.show = false;
    }
  },
  components: {
    CgPopup
  }
};
</script>





<style scoped>
section {
  position: absolute;
  z-index: 0;
}
.google-map {
  width: 100vw;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
.controls {
  width: 300px;
  height: 25px;
  font-size: 1.2em;
  font-weight: 500;
  margin: 13px;
  border-radius: 5px;
  padding: 8px;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>

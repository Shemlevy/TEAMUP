<template>
  <section> 
    <cg-popup v-if="show" @close-dialog="close"></cg-popup>
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
import {SET_CURR_ADDERSS} from '../store/modules/map/Map.module'


export default {
  name: "google-map",
  // props: ['name'],
  data: function() {
    return {
      currAddress: null,
      show: false,
      mapName: this.name + "-map",
      map: null,
      bounds: null,
      // markers: [],
      searchBox: null
      // searchLocation: {
      //   latitude: 51.501527,
      //   longitude: -0.1921837
      // },
    };
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
      let self = this;
      MapService.getGeoByAddress(e).then(res => {
        
        this.map.setZoom(16);
        this.map.panTo(new google.maps.LatLng(res.lat, res.lng));
        this.$store.commit({
          type: SET_CURR_ADDERSS,
          address: res.address
        });

        const marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          position: res.postion,
          draggable: false,
          map: this.map
        });
        marker.addListener("click", function(e) {
          self.show = !self.show;
        });
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
</style>

<template>
  <section> 
    <transition name="slide-fade">
      <cg-popup v-if="show" @close-dialog="close"></cg-popup>
    </transition>
    <input class="controls" style="z-index:999;" type="text" @change="getGeoByAddress" placeholder="Search Box" ref="googleSearch">    
    <div class="google-map" :id="mapName"></div>
    <button class="location-btn" @click="getUserLoc"><i title="Get my location location-btn" class="material-icons">my_location</i></button>
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
      infoWindow: null,
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
    let self = this;
    this.tempMarker.addListener("click", function(e) {
      self.show = !self.show;
    });
  },
  mounted() {
    this.renderMap();
  },
  watch: {
    selctedGame() {
      if (!this.selctedGame) return;
      var lat = this.selctedGame.location.lat;
      var lng = this.selctedGame.location.lng;
      this.map.panTo(new google.maps.LatLng(lat, lng));
    },
    games() {
      this.renderMap();
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
    renderMap() {
      let self = this;
      this.bounds = new google.maps.LatLngBounds();
      const element = document.getElementById(this.mapName);

      let eltCenter = [{ location: { lat: 32.072634, lng: 34.763987 } }];
      const mapCentre = this.games ? this.games[0] : eltCenter[0];

      const options = {
        center: new google.maps.LatLng(
          mapCentre.location.lat,
          mapCentre.location.lng
        )
      };

      this.map = new google.maps.Map(element, { maxZoom: 12 });
      this.infoWindow = new google.maps.InfoWindow();

      this.tempMarker.setMap(this.map);
      var input = this.$refs.googleSearch;
      console.log('input',input);
      
      // this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
      this.searchBox = new google.maps.places.SearchBox(input);

    if (this.games) { 
      console.log('in google map', this.games)
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
        marker.addListener("click", function(e) {
        console.log(coord._id);
        self.$router.push(`/game/${coord._id}`);
        });
        // this.markers.push(marker)
        this.map.fitBounds(this.bounds.extend(position));
        });
      } else {
        this.map.fitBounds(this.bounds.extend(options.center));
      }
    },
    getGeoByAddress(e) {
      MapService.getGeoByAddress(e).then(res => {
        let pos = new google.maps.LatLng(res.lat, res.lng)
        this.map.setZoom(16);
        this.map.panTo(new google.maps.LatLng(res.lat, res.lng));
        
        this.$store.commit({
          type: SET_CURR_ADDERSS,
          address: res
        });
        this.tempMarker.setPosition(res.postion);
        console.log('this i this.tempMarkers res' ,  this.tempMarker);
      });
    },
    close() {
      this.show = false;
    },
    getUserLoc() {
      let self = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            self.infoWindow.setPosition(pos);
            self.infoWindow.setContent("You are Here");
            self.infoWindow.open(self.map);
            self.map.setCenter(pos);
          },
          function() {
            handleLocationError(true, self.infoWindow, self.map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, self.infoWindow, map.getCenter());
      }
    },
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
      self.infoWindow.setPosition(pos);
      self.infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      self.infoWindow.open(self.map);
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
  z-index: 5;

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

.location-btn {
  border: 0px;
  margin: 10px 44px;
  padding: 0px;
  position: absolute;
  cursor: pointer;
  user-select: none;
  width: 25px;
  height: 25px;
  overflow: hidden;
  top: 51px;
  right: 0px;
  color: gray;
  background-color: white;
}
</style>

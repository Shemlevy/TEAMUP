<template>
  <section> 
    <!-- @change="getGeoByAddress" -->
    <input  class="controls" type="text"  placeholder="Search Box" ref="googleSearch">    
    <div class="google-map" :id="mapName"></div>
  </section>
</template>
<script>
export default {
  name: 'google-map',
  props: ['name','details'],
  data: function () {
    return {
      mapName: this.name + "-map",

      markerCoordinates: [{
        latitude: 51.501527,
        longitude: -0.1921837
      }, {
        latitude: 51.505874,
        longitude: -0.1838486
      }, {
        latitude: 51.4998973,
        longitude: -0.202432
      }],
      map: null,
      bounds: null,
      markers: [],
      searchBox: null,
      searchLocation: {
        latitude: 51.501527,
        longitude: -0.1921837
      },
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);

    var input = this.$refs.googleSearch
            this.searchBox = new google.maps.places.SearchBox(input);
            this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);


    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ 
        position,
        map: this.map
      });
    this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    });
  },
  watch:{
    details(){
      if (!this.details) return;
      var lat = this.details.location.latitude;
      var lng = this.details.location.longitude;
      this.map.panTo(new google.maps.LatLng(lat, lng));
    }
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

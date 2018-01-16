<template>
  <section>
    <div id="locationField">
      <input id="autocomplete" placeholder="Set place for a New Game" type="text" autofocus/>
    </div> 
    
  </section>
</template>

<script>
import { SET_CURR_ADDRESS } from "../store/modules/map/Map.module";
import MapService from "../service/map/MapService";
import { GET_USER } from "../store/modules/user/user.module";
import EventBusService, {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALART
} from "../service/EventBusService";

export default {
  data() {
    return {
      placeSearch: null,
      autocomplete: null,
      geocoder: null
    };
  },
  mounted() {
    this.geocoder = new google.maps.Geocoder();
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete") /*,
      {types: ['(cities)']}*/
    );

    this.autocomplete.addListener("place_changed", this.fillInAddress);
  },
  methods: {
    moveTo() {
      if (this.$store.getters[GET_USER]) {
        this.$router.push("/CreatGame");
        $("html,body").scrollTop(0);
      } else {
        EventBusService.$emit(SHOW_ALART,'You need to be looged in before');
      }
    },
    codeAddress(address) {
      let self = this;
      this.geocoder.geocode({ address: address }, function(results, status) {
        if (status == "OK") {
          ///*******not woriking?? */

          // EventBusService.$emit(SHOW_LOADER);
          // EventBusService.$on(HIDE_LOADER, () => {
          //   setTimeout(() => {
          //     this.loading = false;
          //   }, 0);
          // });

          let pos = results[0].formatted_address;
          MapService.getGeoByAddress(pos).then(res => {
            self.$store.commit({
              type: SET_CURR_ADDRESS,
              address: res
            });
            self.moveTo();
          });
        } else {
          alert(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    },

    fillInAddress() {
      var place = this.autocomplete.getPlace();
      this.codeAddress(document.getElementById("autocomplete").value);
    }
  }
};
</script>

<style scoped>
#autocomplete {
  font-size: 0.9em;
  padding: 8px;
  width: 350px;
  border-radius: 10px;
}

#autocomplete:focus {
  border-radius: 10px;
  border: 1px solid var(--third-color);
}
</style>

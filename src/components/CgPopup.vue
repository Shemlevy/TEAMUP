<template>
  <section class="marker-popup">
    <div>{{currAddress}}</div>
    <div>The perfect place to start a game</div>
    <div class="popup-btn">
      <router-link tag="v-btn" class="cg-btn" to="/CreatGame">CreatGame</router-link>
      <v-btn @click="closeDialog" outline color="indigo">Cencel</v-btn>
    </div>
  </section>
</template>

<script>
import { GET_CURR_ADDRESS } from "../store/modules/map/Map.module";
export default {
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    }
  },
  computed: {
    currAddress() {
      return this.$store.getters[GET_CURR_ADDRESS];
    }
  }
};
</script>

<style scoped>
.marker-popup {
  display: flex;
  flex-flow: column wrap;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  color: black;
  z-index: 5;
  margin-left: 60%;
  width: 300px;
  height: 150px;
  bottom: 0;
  padding: 8px;
  font-weight: 600;
  align-items: center;

  transform: translateY(0);
  opacity: 1;
  transition: -webkit-transform 200ms ease-out, transform 200ms ease-out,
    opacity 200ms ease-out, visibility 200ms ease-out;
}
.popup-btn {
  position: absolute;
  display: flex;
  justify-content: space-around;
  margin-top:50px;
  margin-bottom: 20px;
}
.cg-btn {
  background-color: transparent !important;
  border: 1px solid #3f51b5;
  color: #3f51b5;
}
</style>

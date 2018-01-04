<template>
  <section>
    <section v-if="show" class="marker-popup">
      <div>{{currAddress.address}}</div>
      <div>The perfect place to start a game</div>
      <div class="popup-btn">
        <v-btn class="cg-btn" @click="moveTo">CreateGame</v-btn>
        <v-btn class="cg-btn" @click="closeDialog">Cencel</v-btn>
      </div>
    </section>
    <section v-if="!show"  class="marker-popup">
      <div>Need to logged in first</div>
      <v-btn class="cg-btn" @click="login">Login</v-btn>
    </section>
  </section>
</template>

<script>
import { GET_CURR_ADDRESS } from "../store/modules/map/Map.module";
import { GET_USER } from "../store/modules/user/user.module";

export default {
  data() {
    return {
      show:true
    };
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    },
    moveTo() {
      if (this.$store.getters[GET_USER]) {
        this.$router.push("/CreatGame");
      } else {
        //need to put sweet alart!!!!//////
        this.show = false
      }
    },
    login(){
      this.$router.push("/login");
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
  position: absolute;
  background-color: #fff;
  border: 1px solid rgb(27, 33, 121);
  border-radius: 2px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  color: rgb(23, 48, 100);
  right:100px;
  padding: 8px;
  font-weight: 600;
  max-height: 120px;
  margin-top: -120px;
}

.cg-btn {
  background-color: transparent !important;
  border: 1px solid #121f97;
  color: #2e4591;
  box-shadow: 0px 1px 2px black;
}
.cg-btn:hover {
  box-shadow: none;
}
</style>

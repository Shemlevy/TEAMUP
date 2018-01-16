<template>
  <div id="app">
    <v-app>
    <loading-process v-show="loading"></loading-process>
    <transition name="fade" mode="in-out" >
      <alart-modal class="alart" v-if="show" :data="msg"></alart-modal>
    </transition> 
    <nav-bar></nav-bar>
    <router-view class="view-port"/>
    <footer-bar></footer-bar>
    </v-app> 
  </div>

</template>

<script>
import NavBar from "./components/NavBar.vue";
import LoadingProcess from "./components/LoadingProcess.vue";
import EventBusService, {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ALART
} from "./service/EventBusService.js";
import FooterBar from "./components/FooterBar";
import StorageService from "./service/StorageService.js";
import { SET_USER, LOAD_USER_GAMES } from "./store/modules/user/user.module";
import { LOAD_GAMES } from "./store/modules/game/Game.module";
import { LOAD_CATEGORIES } from "./store/modules/category/Category.module";
import AlartModal from "../src/components/AlertModal";

export default {
  name: "app",
  data() {
    return {
      loading: false,
      show: false
    };
  },
  created() {
    EventBusService.$on(SHOW_LOADER, () => {
      this.loading = true;
    });
    EventBusService.$on(SHOW_ALART, (msg) => {
      this.show = true;
      this.msg = msg
      this.$router.push("/login");
      setTimeout(() => {
        this.show = false;
      }, 2000);
    });
    EventBusService.$on(HIDE_LOADER, () => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
    EventBusService.$emit(SHOW_LOADER);
    this.$store.dispatch({ type: LOAD_GAMES });
    this.$store.dispatch({ type: LOAD_CATEGORIES });
    let user = StorageService.loadFromStorage("user");
    if (user) {
      this.$store.commit({ type: SET_USER, user });
      this.$store.dispatch({ type: LOAD_USER_GAMES, userId: user._id });
    }
  },
  components: {
    NavBar,
    LoadingProcess,
    FooterBar,
    AlartModal
  }
};
</script>

<style>
#app {
  background-color: var(--nav-color);
  padding: 0 15px;
}
.view-port {
  background-color: var(--main-color);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 880px) {
  #app {
    padding: 0;
  }
}
</style>

<template>
  <div id="app">
    <v-app>
    <loading-process v-show="loading"></loading-process>
    <nav-bar></nav-bar>
    <router-view/>

    </v-app> 
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import LoadingProcess from './components/LoadingProcess.vue'
import EventBusService, {SHOW_LOADER, HIDE_LOADER} from './service/EventBusService.js'
import StorageService from './service/StorageService.js'
import {SET_USER, LOAD_USER_GAMES} from './store/modules/user/user.module'
import {LOAD_GAMES} from './store/modules/game/Game.module'
import {LOAD_CATEGORIES} from './store/modules/category/Category.module'

export default {
  name: "app",
  created(){
    EventBusService.$on(SHOW_LOADER, () => {
      this.loading = true
    });
    EventBusService.$on(HIDE_LOADER, () => {
      setTimeout(() => {
        this.loading = false
      }, 1000);
    });
    EventBusService.$emit(SHOW_LOADER)
    this.$store.dispatch({ type: LOAD_GAMES });
    this.$store.dispatch({ type: LOAD_CATEGORIES });
    let user = StorageService.loadFromStorage('user')
    if(user){
      this.$store.commit({type: SET_USER, user})
      this.$store.dispatch({type: LOAD_USER_GAMES, userId: user._id})
    }
  },
  data(){
    return{
      loading: false
    }
  },
  components:{
    NavBar,
    LoadingProcess
  }
};
</script>

<style>
#app {
  background-color: var(--main-color);
}
</style>

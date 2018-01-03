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
export default {
  name: "app",
  created(){
    EventBusService.$on(SHOW_LOADER, () => {
      this.loading = true
    }),
    EventBusService.$on(HIDE_LOADER, () => {
      console.log('emit reached app')
      setTimeout(() => {
        this.loading = false
      }, 1000);
        
    })
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

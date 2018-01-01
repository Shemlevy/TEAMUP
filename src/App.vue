<template>
  <div id="app">
    <v-app>
    <nav-bar></nav-bar>
    <router-view/>
    </v-app> 
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: "app",
  components:{
    NavBar
  }
};
</script>

<style>
#app {
  background-color: var(--main-color);
}
</style>

<template>
  <section>
    <v-app>
      <search-bar></search-bar>
    </v-app>
  </section>
</template>

<script>
import SearchBar from '../components/SearchBar'
export default {
  name: 'HomePage',
  data() {
    return {};
  },
  components:{
    SearchBar
  }
};
</script>

<style scoped>
h1{
    font-family: var(--primary-font);
    color: var(--font-main-color);  
}
</style>





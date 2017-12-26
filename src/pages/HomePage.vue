<template>
  <section>
    <Nav></Nav>
  </section>
</template>

<script>
import Nav from '../components/Nav'
export default {
  name: 'HomePage',
  data() {
    return {};
  },
  components:{
    Nav
  }
};
</script>

<style scoped>

h1{
    font-family: var(--primary-font);
    color: var(--font-main-color);  
}
</style>





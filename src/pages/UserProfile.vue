<template>
  <section>
    <h1>UserProfile</h1>
    <Signin></Signin>
  </section>
</template>

<script>
import Signin from '../components/SignIn'
export default {
  name: 'UserProfile',
  data() {
    return {};
  },
  components:{
    Signin
  }
};
</script>

<style scoped>

</style>

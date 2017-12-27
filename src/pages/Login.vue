<template>
  <section>
    <sign-in class="sign-in"></sign-in>
    <sign-up class="sign-up"></sign-up>
  </section>
</template>

<script>
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";


export default {
  
  name: "Login",
  data() {
    return {
    };
  },
  methods: {

  },

  components: {
    SignIn,
    SignUp
  }
};
</script>



<style scoped>

</style>

    

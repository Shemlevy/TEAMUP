<template>
  <section class="main-container login-page">
    <sign-up class="sign-up"></sign-up>
    <sign-in class="sign-in"></sign-in>
  </section>
</template>

<script>
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {},

  components: {
    SignIn,
    SignUp
  }
};
</script>



<style scoped>
.main-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

@media (max-width: 740px) {
.sign-in{
  margin-bottom: 100px;
}
 
}
</style>

    

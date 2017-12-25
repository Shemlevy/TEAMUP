<template>
  <section>
    <h1>CONNECT THROUGH</h1>
    <div>
        <button>facebook</button>
        <button>google</button>
    </div>
    <div>
        <label for="email"></label>
        <input id="email" type="text">
        <label for="pass"></label>
        <input id="pass" type="text">
    </div>
    <div>
        <button>Login</button>
        <button>Register</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

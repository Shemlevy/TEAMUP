<template>
  <nav>
    <h1>TEAM<span>UP</span></h1><router-link to="/">HomePage</router-link>
    <router-link to="/Main">main</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/user/:userId">UserProfile</router-link>
    <router-link to="/team/:teamId">Team</router-link>
    <router-link class="log-btn" tag="button" to="/login">Login/Signup</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {};
  }
};
</script>


<style scoped>
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  box-shadow: 2px 2px 6px black;
  margin-bottom: 10px;
}
h1{
  color: var(--font-main-color);
  font-family: var(--primary-font);
  font-size:3em;
  margin-left:10px;
}
h1 span {
  color: var(--secondary-color)
}
.log-btn{
  margin-right:10px;
}

</style>

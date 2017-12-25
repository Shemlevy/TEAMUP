<template>
<v-app>
  <div id="app">
    <router-link to="/">HomePage</router-link>
    <router-link to="/Main">main</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/user/:userId">UserProfile</router-link>
    <router-link to="/team/:teamId">Team</router-link>
    <router-view/>
  </div>
</v-app>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
</style>

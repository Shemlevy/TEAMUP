<template>
  <nav>
    <h1>TEAM<span>UP</span></h1>
    <!-- <router-link to="/">HomePage</router-link>
    <router-link to="/Main">main</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/user/:userId">UserProfile</router-link>
    <router-link to="/team/:teamId">Team</router-link> -->
    <router-link v-if="!!!user" class="main-btn log-btn" tag="button" to="/login">Login/Signup</router-link>
    <div v-if="!!login">
      <router-link class="user-link" to="/user">
      <div class="user-details">
        <img class="profile-img" :src="user.imgUrl"/>
        <h4 class="profile-nav">{{login.name}}</h4>
      </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { GET_USER } from "../store/modules/user/user.module";

export default {
  name: "nav-bar",
  data() {
    return {
      user: null
    };
  },
  computed: {
    login() {
      return (this.user = this.$store.getters.getuser);
    }
  }
};
</script>


<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 80px;
  border-bottom: 3px solid rgb(26, 48, 90);
  margin-bottom: 10px;
  background-color: rgb(36, 36, 37);
}
h1 {
  color: var(--font-main-color);
  font-family: var(--primary-font);
  font-size: 3em;
  margin-left: 10px;
  text-shadow: 2px 2px 6px black;
}
h1 span {
  color: var(--secondary-color);
}
.log-btn {
  margin-right: 10px;
}
.profile-img {
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-details {
  display: flex;
  align-items: center;
  color: white;
  margin-right: 10px;
  font-size: 1.2em;
  font-family: var(--secondery-font);
}
.user-details:hover{
  background-color: rgba(0, 0, 0, 0.212);
}
.user-link{
  text-decoration: none;
}


</style>

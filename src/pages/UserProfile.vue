<template>
  <section>
    <div class="porfile-contianer">
      <user-profile-details v-if="user" :user="user" @userLogout="userLogout" @updateUserProfile="updateUserProfile($event)"></user-profile-details>
      <game-list-vut :games="games"></game-list-vut>
    </div>
  </section>
</template>

<script>
import { GET_USER, USER_UPDATE, USER_DELETE, GET_USER_GAMES, USER_LOGOUT} from "../store/modules/user/user.module.js";
import UserProfileDetails from "../components/UserProfileDetails.vue";
import gameListVut from "../components/GamesListVut.vue";
export default {
  name: "UserProfile",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters[GET_USER];
    },
    games() {
      return this.$store.getters[GET_USER_GAMES];
    }
  },
  methods: {
    updateUserProfile(userDetails) {
      console.log("in user profile page: ", userDetails);
      this.$store.dispatch({ type: USER_UPDATE, userDetails });
    },
    uploadImg(event) {
      console.log("hi");
    },
    userLogout(){
      this.$store.dispatch({type: USER_LOGOUT})
        .then(_ =>{
          this.$router.push('/')
        })
    }
  },
  components: {
    UserProfileDetails,
    gameListVut
  }
};
</script>

<style scoped>
.user-tab-bar {
  background-color: rgb(36, 36, 37);
}

.porfile-contianer{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>


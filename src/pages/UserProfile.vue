<template>
  <section>
    <user-profile-details v-if="user" :user="user" @updateUserProfile="updateUserProfile($event)"></user-profile-details>
    <v-tabs :scrollable="false">
    <v-tabs-bar dark class="user-tab-bar">
      <v-tabs-slider></v-tabs-slider>
      <v-tabs-item :href="'#tab-games'">
        Games
      </v-tabs-item>
      <!-- <v-tabs-item v-if="user"  :href="'#tab-notifications'">
        Notifications
      </v-tabs-item> -->
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content v-if="games" :id="'tab-games'">
        <game-list-vut :games="games"></game-list-vut>
      </v-tabs-content>
      <!-- <v-tabs-content :id="'tab-notifications'">
        <h1>No new notifications</h1>
      </v-tabs-content> -->
    </v-tabs-items>
  </v-tabs>
  </section>
</template>

<script>
  import {GET_USER, USER_UPDATE, USER_DELETE, GET_USER_GAMES} from '../store/modules/user/user.module.js';
  import UserProfileDetails from '../components/UserProfileDetails.vue';
  import gameListVut from '../components/GamesListVut.vue';
export default {

  name: "UserProfile",
  data() {
    return {};
  },
  computed: {
    user(){
      return this.$store.getters[GET_USER]
    },
    games(){
      return this.$store.getters[GET_USER_GAMES]
    }
  },
  methods: {
    updateUserProfile(userDetails){
      console.log('in user profile page: ' ,userDetails)
      this.$store.dispatch({ type: USER_UPDATE, userDetails})
    },
    uploadImg(event){
      console.log('hi')
    }
  },
  components: {
    UserProfileDetails,
    gameListVut
  }
};
</script>

<style scoped>
.user-tab-bar{
  background-color: rgb(36,36,37)
}
</style>


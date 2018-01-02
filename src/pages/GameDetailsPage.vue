
<template>
    <v-layout row v-if="game">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media class="card-pic-area" :src="coverImg" height="300px">
          <v-layout column class="media">
            <v-card-title>
              <v-btn dark icon>
                <v-icon>chevron_left</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="black--text pl-5 pt-5">
              <div class="display-1 pl-4 pt-5">{{game.name}}</div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-action>
              <!-- <v-icon color="indigo">phone</v-icon> -->
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{game.category.name}}</v-list-tile-title>
              <v-list-tile-sub-title>Game Category</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset ></v-divider>
           <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">grade</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>TODO:game rank</v-list-tile-title>
              <v-list-tile-sub-title>Game Rank</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <!-- <v-icon>face</v-icon> -->
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">schedule</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{game.time.date}}</v-list-tile-title>
              <v-list-tile-sub-title>{{game.time.hour}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>schedule</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <!-- <v-list-tile-title>1400 Main Street</v-list-tile-title>
              <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title> -->
              <v-list-tile-title>{{game.location.address}}</v-list-tile-title>
              <v-list-tile-sub-title>{{game.location.address}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
           <v-divider inset></v-divider>
           <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">chat</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Puki chat</v-list-tile-title>  
            </v-list-tile-content>
          </v-list-tile>
           <Game-members></Game-members>
        </v-list> 
      </v-card>
    </v-flex>
  </v-layout>
  
</template>

<script>
import {
  LOAD_GAME_BY_ID,
  GET_SELCTED_GAME
} from "../store/modules/game/Game.module";
import GameMembers from "../components/GameMembers";
export default {
  data() {
    return {};
  },
  components: {
    GameMembers
  },
  computed: {
    game() {
      return this.$store.getters[GET_SELCTED_GAME];
    },
    coverImg() {
      return this.game.category.url;
    }
  },
  created (){
      console.log('page created')
      var id = this.$router.history.current.params.gameId
      this.$store.dispatch({type: LOAD_GAME_BY_ID , gameId: id})
      
      
  }
};
</script>
<style lang="stylus">

.media {
  height: 100%;
  margin: 0;
}

.card-pic-area {
  background-color: var(--secondary-color);
}
</style>
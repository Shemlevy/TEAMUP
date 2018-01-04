
<template>
  <v-layout row v-if="game">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media class="card-pic-area" :src="coverImg" height="450px">
          <v-layout column class="media game-detailes-cover">
              <v-card-title class="white--text title-height">
                <div class="display-1">{{game.name}}</div>
              </v-card-title>
        </v-layout>
      </v-card-media>
      <v-list two-line>
        <v-list-tile @click="">
            <v-list-tile-action>
              <!-- this tag is for position only -->
              <v-icon color="indigo"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
            <v-list-tile-sub-title>GAME CATEGORY</v-list-tile-sub-title>
            <v-list-tile-title>{{game.category.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset></v-divider>
        <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">grade</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-sub-title>GAME LEVEL</v-list-tile-sub-title>
              <v-list-tile-title>{{game.level}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
          <v-divider inset></v-divider>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">schedule</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-sub-title>DATE</v-list-tile-sub-title>
                <v-list-tile-title>{{game.time.date}}  {{game.time.hour}}</v-list-tile-title>
              </v-list-tile-content>
              <!-- <v-list-tile-action>
                <v-icon></v-icon>
              </v-list-tile-action> -->
            </v-list-tile>
          <v-divider inset></v-divider>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">location_on</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-sub-title>LOCATION</v-list-tile-sub-title>
                <v-list-tile-title>{{game.location.address}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">chat</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-sub-title>CHAT</v-list-tile-sub-title> 
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile-sub-title>
                <button class="main-btn" v-if="user && !exist" @click="userJoinGame">TEAM<span>UP</span></button>
                <button class="main-btn" v-if="user && exist" @click="leaveGame">Leave</span></button>
            </v-list-tile-sub-title>
          </v-list>
          <GameMembers :game="game"></GameMembers>          
        </v-card>
      </v-flex>
    </v-layout>
  
</template>

<script>
import {
  LOAD_GAME_BY_ID,
  GET_SELCTED_GAME,
  UPDATE_GAME
} from "../store/modules/game/Game.module";
import {
  GET_USER
} from "../store/modules/user/user.module";
import GameMembers from "../components/GameMembers";


export default {
  data() {
   
    return {
      exist : false
    };
  },
  computed: {
    game() {
      var strGame = JSON.stringify(this.$store.getters[GET_SELCTED_GAME]);
      return JSON.parse(strGame);
    },
    user() {
      return this.$store.getters[GET_USER];
    },
    coverImg() {
      return this.game.category.url;
    }
  },
  created (){
      // console.log('page created')
      var id = this.$router.history.current.params.gameId
      this.$store.dispatch({type: LOAD_GAME_BY_ID , gameId: id})
      
      
  },
  watch:{
    game() {
       this.setActions();
    },
    user() {
       this.setActions();
    }
  },
  methods: {
    setActions() {
      if (this.game && this.user) {
        this.exist = this.game.players.find(player => player.id === this.user._id) 
      }
    },
     userJoinGame(){
      

      this.game.players.push({
        id: this.user._id,
        name: this.user.name,
        imgUrl: this.user.imgUrl
      })

      this.$store.dispatch({type: UPDATE_GAME, game: this.game})

    },
    leaveGame(){
       this.game.players = this.game.players.filter(player => player.id !== this.user._id) 
       this.$store.dispatch({type: UPDATE_GAME, game: this.game})
    }
  },
  components:{
    GameMembers
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
.title-height{
  position: absolute;
  bottom: 0;
  left: 7px;
}
.game-detailes-cover{
  position: relative;
}
</style>
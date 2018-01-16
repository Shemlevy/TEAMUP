
<template>
  <v-layout row v-if="game">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media class="card-pic-area" :src="coverImg" height="450px">
          <v-layout column class="media game-detailes-cover">
              <v-card-title class="white--text title-height">
                <div class="headline-title">{{game.name}}</div>
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
            <div class="GDtitle">{{game.category.name}}</div>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider inset></v-divider>
         <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">people</v-icon>
         </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-sub-title>PLAYERS COUNT</v-list-tile-sub-title>
              <div class="GDtitle">{{game.players.length}}/{{game.playerLimit}} </div>
              <div v-if="playersLeft === 0" class="NoPlaces">NO PLACES LEFT</div>
              <div v-if="playersLeft === 1" class="onePlace">{{playersLeft}} PLACE LEFT</div>
              <div v-if="playersLeft > 1"   class="players-left">{{playersLeft}} PLACES LEFT</div>
            </v-list-tile-content>
        </v-list-tile>
          <v-divider inset></v-divider>
        <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">grade</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-sub-title>GAME LEVEL</v-list-tile-sub-title>
              <div class="GDtitle">{{game.level}}</div>
            </v-list-tile-content>
        </v-list-tile>
          <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">schedule</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-sub-title>DATE</v-list-tile-sub-title>
                <div class="GDtitle">{{game.time.date}} <span> {{game.time.hour}} </span></div>
              </v-list-tile-content>
            </v-list-tile>
          <v-divider inset></v-divider>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">location_on</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-sub-title>LOCATION</v-list-tile-sub-title>
                <div class="GDtitle">{{game.location.address}}</div>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
            <v-list-tile v-if="game.about !== null" @click="">
              <v-list-tile-action>
                <!-- <v-icon color="indigo">about_on</v-icon> -->
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-sub-title>ABOUT</v-list-tile-sub-title>
                <div class="GDtitle" >{{game.about}}</div>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>
             <v-list-tile-sub-title class="buttons-contain">
              <button class="main-btn" v-if="user && !exist && canJoinGame" @click="userJoinGame">TEAM<span>UP</span></button>
                <div class="leave-game">
                  <button class="main-btn" v-if="user && exist" @click="leaveGame">Leave Game</button>
                  <div v-if="exist">
                    <div class="GDinfo">YOU ARE A PLAYER IN THE GAME</div>
                  </div> 
                </div>   
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
  UPDATE_GAME,
  SET_SELECTED_GAME
} from "../store/modules/game/Game.module";
import { GET_USER } from "../store/modules/user/user.module";
import GameMembers from "../components/GameMembers";

export default {
  data() {
    return {
      exist: false,
      canJoinGame: true,
      playersLeft: -100,
      isAdmin: false
    };
  },
  computed: {
    game() {
      let game = this.$store.getters[GET_SELCTED_GAME];
      if (!game) return;

      var strGame = JSON.stringify(game);
      return JSON.parse(strGame);
    },
    user() {
      return this.$store.getters[GET_USER];
    },
    coverImg() {
      return this.game.category.url;
    }
  },
  created() {
    var id = this.$router.history.current.params.gameId;
    this.$store.dispatch({ type: LOAD_GAME_BY_ID, gameId: id });
    // checkLimit();
  },
  watch: {
    game() {
      this.setActions();
      this.checkLimit();
    },
    user() {
      this.setActions();
      this.checkLimit();
    }
  },
  methods: {
    setActions() {
      if (this.game && this.user) {
        let player = this.game.players.find(
          player => player.id === this.user._id
        );
        if (player) {
          this.exist = true;
          // if(player.isAdmin){
          //   this.isAdmin = true
          // }
        }
      }
    },
    checkLimit() {
      if (this.game) {
        this.playersLeft = this.game.playerLimit - this.game.players.length;
        if (this.game.players.length >= this.game.playerLimit) {
          this.canJoinGame = false;
        } else {
          this.canJoinGame = true;
        }
      }
    },
    userJoinGame() {
      this.game.players.push({
        id: this.user._id,
        name: this.user.name,
        imgUrl: this.user.imgUrl,
        isAdmin: false
      });

      this.$store.dispatch({ type: UPDATE_GAME, game: this.game });
    },
    checkAdmin() {},
    leaveGame() {
      this.game.players = this.game.players.filter(
        player => player.id !== this.user._id
      );
      this.$store.dispatch({ type: UPDATE_GAME, game: this.game });
      this.exist = false;
    }
  },
  destroyed() {
    this.$store.commit({ type: SET_SELECTED_GAME, gameId: null });
  },
  components: {
    GameMembers
  }
};
</script>
<style lang="stylus">

.players-left {
  font-family: var(--secondary-font);
  color: blue;
  font-size: 15px;
}

.NoPlaces {
  font-family: var(--secondary-font);
  color: var(--players-limit);
  font-size: 15px;
  -webkit-animation: colorchange 1s infinite alternate;
}

.onePlace {
  font-family: var(--secondary-font);
  color: var(--players-limit);
  font-size: 15px;
  -webkit-animation: colorchange 0.5s infinite alternate;
}

.GDtitle, GDinfo {
  font-family: var(--secondary-font);
  color: black;
  font-size: 17px;
}

.GDinfo {
  color: blue;
  padding: 23px 0 0 0;
}
.leave-game{
  display:flex;
}
.buttons-contain{
  height : 63px;
}
.media {
  height: 100%;
  margin: 0;
}

.headline-title {
  color: whitesmoke;
  text-shadow: 3px 3px 6px black;
  font-family: var(--primary-font);
  font-weight: 600;
  font-size: 3em !important;
}

.card-pic-area {
  background-color: var(--secondary-color);
}

.title-height {
  position: absolute;
  bottom: 0;
  left: 7px;
}

.game-detailes-cover {
  position: relative;
}

.main-btn {
  background-color: #e0dada;
  margin: 15px;
}

@keyframes colorchange {
  0% {
    color: var(--players-limit);
  }

  100% {
    color: white;
  }
}
</style>
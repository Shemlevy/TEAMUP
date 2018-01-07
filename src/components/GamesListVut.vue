<template>
  <section class="main-list" style="z-index:2;">
    <v-layout row>
      <v-flex xs12 sm12 offset-sm0>
        <v-card>
          <div class="ctg-selector-container">
            <i  @click="sortByTime" title="Sort By Time" class="material-icons">timer</i>
            <i  @click="sortByDistance" title="Sort By Distance" class="material-icons">location_on</i>
            <ctg-selector class="ctg-selector"></ctg-selector>
            <section v-if="games">
              <button class="create-btns" @click="createGame=true" v-if="!createGame"></button>            
              <transition name="fade" mode="in-out" >
                <new-game class="create-game" v-if="createGame"></new-game>
              </transition> 
            </section>
          </div>
          <v-spacer></v-spacer>
          <div class="list-container">
            <div class="no-game" v-if="!games" >
              <h1>A great opportunity to set up a game</h1> 
                <button @click="newGame=true" v-if="!newGame">Click Here</button>
              <transition name="fade" mode="in-out" >
                <new-game class="new-game" v-if="newGame"></new-game>
              </transition>
            </div> 
            <template class="game-container" v-for="(game , i) in games">
              <!-- <v-divider></v-divider> -->
              <div class="game-details" :key="i">
                <img class="imgList" :src="game.category.url">
                <div class="text-game">
                  <div class="ctg-title">{{game.name}} - {{game.category.name}}</div>
                  <div>{{game.time.hour}}  {{game.time.date}}</div>
                  <div class="locatin-container">
                    <a @click="moveMapTo(game.location.lat,game.location.lng)"
                      class="location-txt">{{game.location.address}}</a>
                  </div>
                  <div><span >{{game.players.length}} </span>/<span class="playersLimit">{{game.playerLimit}}</span>
                    <span v-if="(game.playerLimit - game.players.length) === 0" class="NoPlaces">Closed game</span>
                    <span v-if="(game.playerLimit - game.players.length) === 1" class="OnePlace">1 Place left</span>
                  </div>
                  <div>Level: {{game.level}}</div>
                </div>  
                
                  <distance-calc v-if="distanceFromUser" :distance="distanceFromUser[game._id]"></distance-calc> 
                  <div class="spacer" v-else></div>
                  <section class="count-and-det">
                    <count-down :game="game"></count-down> 
                    <a class="main-btn" @click="showDetPage(game._id)">More Details</a>
                  </section>
                
              </div>
            <v-divider></v-divider>
            </template>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>


<script>
import { SET_SELECTED_GAME } from "../store/modules/game/Game.module";
import CategorySearchBar from "./CategorySearchBar";
import CtgSelector from "./CtgSelector";
import CountDown from "./CountDown";
import {
  SET_PICK_ADDRESS,
  GET_USER_LOCATION
} from "../store/modules/map/Map.module";
import mapService from "../service/map/MapService";
import EventBusService, { GET_LOCATION } from "../service/EventBusService";
import DistanceCalc from "./DistanceCalc";
import NewGame from "./NewGame";

export default {
  props: ["games", "selectedCategory"],
  data() {
    return {
      distanceFromUser: null,
      newGame: false,
      next: true,
      createGame: false
    };
  },
  methods: {
    onGameClicked(game) {
      this.$store.commit({ type: SET_SELECTED_GAME, game });
    },
    showDetPage(gameId) {
      this.$router.push(`/game/${gameId}`);
    },
    emitJoin(game) {
      this.$emit("userJoinGame", game);
    },
    sortByTime() {
      //send to service and get from server
      console.log("sortb ytime");
    },
    sortByDistance() {
      EventBusService.$emit(GET_LOCATION);
    },
    moveMapTo(lat, lng) {
      this.$store.commit({
        type: SET_PICK_ADDRESS,
        address: { lat, lng }
      });
    }
  },
  computed: {
    userLocation() {
      return this.$store.getters[GET_USER_LOCATION];
    }
  },
  watch: {
    userLocation() {
      this.distanceFromUser = this.games.reduce((acc, x) => {
        acc[x._id] = mapService.getDistanceFromUser(
          x.location.lat,
          x.location.lng,
          this.userLocation.lat,
          this.userLocation.lng
        );
        return acc;
      }, {});

      // let self = this;
      // this.games.sort(function(a, b) {
      //   return self.distanceFromUser[a._id] - self.distanceFromUser[b._id];
      // });
    }
  },
  components: {
    CategorySearchBar,
    CtgSelector,
    CountDown,
    DistanceCalc,
    NewGame
  }
};
</script>
<style scoped>
.main-list {
  box-shadow: 1px 0px 20px rgb(102, 102, 102);
}
.ctg-title {
  font-size: 1.125em;
  color: var(--keywords);
}
.ctg-title {
  width: 240px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.playersLimit {
  padding: 5px;
  color: var(--players-limit);
}
.locatin-container {
  width: 240px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: underline;
}
.NoPlaces {
  font-family: var(--secondary-font);
  color: var(--players-limit);
  font-size: 0.9em;
  -webkit-animation: colorchange 0.8s infinite alternate;
}
.OnePlace {
  font-family: var(--secondary-font);
  color: var(--players-limit);
  font-size: 0.9em;
  -webkit-animation: colorchange 0.3s infinite alternate;
}
.count-and-det {
  display: flex;
  flex-flow: column;
  margin: 10px;
}

@-webkit-keyframes colorchange {
  0% {
    color: var(--players-limit);
  }
  100% {
    color: rgb(238, 188, 188);
  }
}
.ctg-selector-container {
  display: flex;
  align-items: center;
  color: var(--font-color-selector) !important;
  background-color: var(--main-color);
}
.create-btns:after {
  content: "Create New Game";
}
.create-btns {
  margin-left: 100%;
  width: 140px;
}
.ctg-selector {
  margin-top: 10px;
}
.material-icons {
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.material-icons:hover {
  -webkit-animation: spin 0.4s infinite steps(8);
  animation: spin 0.4s infinite steps(8);
}
.material-icons:active {
  color: gold;
}
.main-btn {
  text-decoration: underline;
  color: gray !important;
  width: 115px;
}
.spacer {
  width: 90px;
}
.imgList {
  max-height: 134px !important;
  max-width: 170px !important;
}
.game-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-container {
  color: var(--font-color-selector);
  font-family: var(--secondery-font);
  font-weight: 600;
  width: 690px;
  height: 516px;
  overflow-x: hidden;
  background-color: var(--secondary-color);
}
.text-game {
  padding: 0 10px;
  width: 250px;
  text-overflow: ellipsis;
}

.no-game {
  font-size: 2em;
  background-image: url("../../static/ create.gif");
  background-size: cover;
  height: 300px;
  min-width: 375px;
}
.no-game h1 {
  color: white;
  padding: 10px;
  font-family: var(--primary-font);
}
.no-game button {
  margin-top: 300px;
}
button {
  margin: 0 auto;
  display: block;
  background-color: var(--third-color);
  opacity: 0.9;
  color: white;
  padding: 4px 8px;
  border-radius: 10px;
}
.create-game {
  margin-left: 25px;
}

.new-game {
  margin: 0 auto;
  display: block;
  margin-top: 300px;
  margin-left: 4%;
  -moz-user-focus: inherit;
}
button:hover {
  background: rgba(0, 0, 0, 0);
  color: var(--third-color);
  box-shadow: inset 0 0 0 2px var(--third-color);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

@media (max-width: 880px) {
  .imgList {
    display: none;
  }
  .list-container {
    width: 100vw;
  }
  .text-game {
    width: 160px;
  }
  .locatin-container {
    width: 160px;
  }
  .ctg-title {
    width: 160px;
  }

  .create-btns:after {
    content: "+";
  }
  .create-btns {
    width: 40px;
    height: 40px;
    padding: 0;
    font-weight: 900;
    border-radius: 50%;
    font-size: 2em;
    margin-left: 30px;
  }
  .create-game {
    position: absolute;
    margin-left:-278px;
    z-index: 6;
    margin-top:-12px;

  }
  .ctg-title {white-space:normal;}
}
</style>


                        
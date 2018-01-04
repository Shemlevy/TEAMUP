<template>
  <section class="main-list" style="z-index:2;">
    <v-layout row>
      <v-flex xs12 sm12 offset-sm0>
        <v-card>
          <div class="ctg-selector-container">
            <i  @click="sortByTime" title="Sort By Time" class="material-icons">timer</i>
            <i  @click="sortByDistance" title="Sort By Distance" class="material-icons">location_on</i>
            <ctg-selector class="ctg-selector"></ctg-selector>
          </div>
          <v-spacer></v-spacer>
          <div class="list-container">
            <div v-if="!games" >No games to display</div> 
            <template class="container" v-for="(game , i) in games">
              <v-divider></v-divider>
              <div class="game-details" :key="i">
                <img class="imgList" :src="game.category.url">
                <div class="text-game">
                  <div class="ctg-title">{{game.name}} - {{game.category.name}}</div>
                  <div>{{game.time.date}} {{game.time.hour}}</div>
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
                <count-down :date="1515088195"></count-down> 
                <distance-calc v-if="distanceFromUser" :distance="distanceFromUser[game._id]"></distance-calc>
                <div class="spacer" v-else></div>
                <button class="main-btn" @click="showDetPage(game._id)">Details</button>
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

export default {
  props: ["games", "selectedCategory"],
  data() {
    return {
      distanceFromUser: null
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
    }
  },
  components: {
    CategorySearchBar,
    CtgSelector,
    CountDown,
    DistanceCalc
  }
};
</script>
<style>
.main-list{
  box-shadow: 1px 0px 20px rgb(102, 102, 102);
}
.ctg-title{
  font-size: 18px;
  color: var(--keywords);
  position: absolute;
  margin-top:-22px;
}
.playersLimit {
  padding: 5px;
  color: var(--players-limit);
}

.NoPlaces {
  font-family: var(--secondary-font);
  color: var(--players-limit);
  font-size: 15px;
  -webkit-animation: colorchange 1.5s infinite alternate;
}
.OnePlace {
  font-family: var(--secondary-font);
  color: var(--players-limit);
  font-size: 15px;
  -webkit-animation: colorchange 0.6s infinite alternate;
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
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--font-color-selector)!important;
  background-color: var(--main-color);
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
  height: 30px;
  width: auto;
  position: relative;
  right: 0;
  margin: 0 10px;
  background-color: rgb(235, 226, 226);
}

.imgList {
  height: 134px !important;
  width: 170px !important;
}
.game-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-container {
  color:var(--font-color-selector);
  font-family: var(--secondery-font);
  font-weight: 600;
  min-width: 50vw;
  background-color: var(--secondary-color);
}
.text-game {
  padding: 8px;
}

.location-txt {
  color: rgb(233, 233, 233);
  cursor: pointer;
  display: inline-block;
  width: 150px;
  text-overflow: ellipsis;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: underline;
}
.list-container {
  height: 516px;
  overflow-x: hidden;
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
</style>


                        
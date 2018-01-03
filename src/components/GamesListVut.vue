<template>
  <section style="z-index:2;">
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
              <hr v-if="i > 0" :key="i">
              <div class="game-details">
                <img class="imgList" :src="game.category.url">
                <div class="text-game">
                  <div>{{game.category.name}}</div>
                  <div>{{game.time.date}} {{game.time.hour}}</div>
                  <div class="locatin-container">
                    <btn @click="moveMapTo(game.location.lat,game.location.lng)"
                      class="location-txt">{{game.location.address}}</btn>
                  </div>
                  <div>{{game.playerLimit}} / {{game.players.length}}</div>
                  <div>Level: {{game.level}}</div>
                </div>  
                <count-down date="21-10-17"></count-down>           
                <button class="main-btn" @click="showDetPage(game._id)">Game Details</button>
              </div>
            </template>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>


<script>
import { SET_SELECTED_GAME } from "../store/modules/game/Game.module";
import CategorySearchBar from "../components/CategorySearchBar";
import CtgSelector from "../components/CtgSelector";
import CountDown from './CountDown'
import { SET_PICK_ADDRESS } from "../store/modules/map/Map.module";

export default {
  props: ["games", "selectedCategory"],
  data() {
    return {
      iconRank: "star",
      iconPic: "../../static/icons/iconmuscle.png",
    };
  },
  methods: {
    onGameClicked(game) {
      this.$store.commit({ type: SET_SELECTED_GAME, gameId: game._id });
    },
    showDetPage(gameId){
      this.$router.push(`/game/${gameId}`);
    },
    emitJoin(game){
      this.$emit('userJoinGame', game)
    },
    sortByTime(){
      //send to service and get from server
      console.log('sortb ytime');
    },
    sortByDistance(){
      console.log('sortb by distance');

    },
    moveMapTo(lat,lng){
      console.log('lat and ln in game list',lat,lng);
          this.$store.commit({
          type: SET_PICK_ADDRESS,
          address: {lat,lng}
        });
    }
  },
  components:{
    CategorySearchBar,
    CtgSelector,
    CountDown
  }
  
  
};
</script>
<style>
.ctg-selector-container{
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--font-main-color);
  background-color: var(--dark);
}
.ctg-selector{
  margin-top: 10px;
}
.material-icons{
  margin: 0 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
.material-icons:hover{
  -webkit-animation: spin .4s infinite steps(8);
  animation: spin .4s infinite steps(8);
}
.material-icons:active {
  color: gold;
}
.main-btn{
  height: 30px;
  width:auto;
  position: absolute;
  right:0;
  margin-right: 10px;
}

.imgList{
  height: 120px !important;
  width: 160px !important;
}
.game-details{
  display: flex;
  align-items: center;
}
.list-container{
  color:aliceblue;
  font-family: var(--secondery-font);
  font-weight: 600;
  min-width: 50vw;
  background-color: rgb(70, 68, 68);
}
.text-game{
  padding: 8px;
}

.location-txt{
  color:rgb(233, 233, 233);
  cursor: pointer;
  display:inline-block; 
  width:150px;
  text-overflow: ellipsis;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-decoration:underline;
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


                        
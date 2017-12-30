
<template>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media class="card-pic-area" src="/static/memebers-img/Soccer.jpg" height="300px" >
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
              <v-list-tile-title>{{game.category.categoryName}}</v-list-tile-title>
              <v-list-tile-sub-title>Game Category</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon></v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
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
import {LOAD_GAME_BY_ID, GET_SELCTED_GAME} from '../store/modules/game/Game.module'
import GameMembers from '../components/GameMembers'
export default {
  data() {
    return {
       
    };
  },
  components:{
      GameMembers
  },
  computed: {
      game(){
          return this.$store.getters[GET_SELCTED_GAME]
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
  .media
    height: 100%
    margin: 0
  .card-pic-area{
      background-color: var(--secondary-color);
  }
  
</style>
<!--the old style
<style scoped>


.team-details{
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--main-color);
    align-items: center;
    width: 50vw;
    height: 100vh;
   
}
.team-details-iner-container{
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 70vh;
}

.info-area {
  display: flex;
  flex-direction: column;
  height: 50vh;
  /* width: 50vw; */
}

.btn-area{
    display: flex;
    justify-content: space-between;
    /* width: 50vw; */
    
}
.logo{
    /* max-width: 120px; */
    display: flex;
    justify-content: space-between; 
    /* width: 50vw; */
    padding: 15px;  
}
.logo img {
    width:150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 30px;
}
h2 {
  font-family: var(--secondery-font);
  color: var(--font-main-color);
  height: 2em; 
  text-shadow: 1px 1px 2px black; 
  font-size: var(--size-M); 
}
h1{
  font-family: var(--secondery-font);
  font-size: var(--size-L);
  color: var(--font-main-color);
  height: 3em; 
  text-shadow: 2px 2px 4px peru;  
}
h2 > span{
  font-family: var(--secondery-font);
  color: var(--font-main-color); 
  height: 2em;
  font-size: var(--size-S);
    
}
</style>-->
<!--the old Template-->
<!--<template>
   <section class="team-details">
            <h1>GAME DETAILES</h1>
            <div class="team-details-iner-container">
                <div class="logo">
                  TODO: game img   
                </div>
                <div class="info-area">
                    <h2>Game-Category:&nbsp;<span>{{game.categoryName}}</span></h2>
                    <h2>Game-Name:&nbsp;<span>{{game.name}}</span></h2>
                    <h2>Game-Date:&nbsp;<span>{{game.date}}</span></h2>
                    <h2>Game-Location:&nbsp;<span>{{game.location.adress}}</span></h2>
                    
                </div>
                <div class="btn-area">
                    <button class="main-btn" >TEAM<span>up</span></button>
                </div>
            </div>
    </section>
    

</template>-->








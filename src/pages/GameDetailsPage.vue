<template>
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

</template>

<script>
import {LOAD_GAME_BY_ID, GET_SELCTED_GAME} from '../store/modules/game/Game.module'
export default {
  data() {
    return {
    };
  },
  computed: {
      game(){
          return this.$store.getters[GET_SELCTED_GAME]
      }
  },
  created (){
      console.log('page created')
      var id = this.$router.history.current.params.gameId
    //   console.log(this.$router.history.current.params.gameId)
      this.$store.dispatch({type: LOAD_GAME_BY_ID , gameId: id})
  }
  
  
};
</script>

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
</style>








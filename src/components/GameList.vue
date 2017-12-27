<template>
   <section class="game-list">
       <ul>
            <li  v-for="game in games" :key="game.id" @click="onGameClicked(game)">
                <ul class="game-item">
                    <li>
                       <h2>Number of members:{{game.members.length}} / {{game.membersLimit}}</h2> 
                    </li>
         
                    <li>
                        <h2>Game-location:{{game.location.address}}</h2>
                    </li>
                    <li>
                        <h2>Next game: &nbsp; {{game.schedule}}</h2>
                    </li>
                  
                </ul>
            </li>
        </ul>
    </section>

</template>

<script>
import { SET_SELECTED_GAME } from "../store/modules/game/Game.module";
export default {
  props: ["games"],

  data() {
    return {};
  },
  methods: {
    onGameClicked(game) {
      this.$store.commit({ type: SET_SELECTED_GAME, gameId: game._id });
    }
  }
};
</script>

<style scoped>
.game-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 600px;
  z-index: 1;
  /* background-color: rgba(205, 134, 63, 0.774);  */
}
h2 {
  font-family: var(--secondery-font);
  color: var(--font-main-color);
  text-shadow: 1px 1px 2px black;
  font-size: 1.2em;
}

.game-item {
  /* border-style: solid; */
  border-width: 1px;
  padding: 20px;
  transition: all .4s ease-in-out;
  cursor: pointer;
  background-color: rgba(205, 134, 63, 0.774); 
  box-shadow: 1px 1px 2px black;
  margin:2px;
  margin-top:0;
  width:50vw

  
}
ul {
  list-style-type: none;
}
.game-item:hover {
  transform: scale(1.05);
}
</style>








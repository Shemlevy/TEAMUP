<template>
  <section>  
    <div class="key-words">
      <key-words v-if="games"></key-words>  
    </div>
    <!--<category-search-bar></category-search-bar>-->
    <section class="main-game-info">
      <games-list-vut @userJoinGame="userJoinGame" :games="games" :selectedCategory="selectedCategory"></games-list-vut>
      <google-map></google-map> 
    </section>
  </section>
</template>

<script>
import EventBusService, {SHOW_LOADER, HIDE_LOADER} from '../service/EventBusService.js'
import {
  GET_SELECTED_CATEGORY,
  LOAD_CATEGORIES
} from "../store/modules/category/Category.module";
import {
  LOAD_GAMES,
  GET_GAMES,
  GET_SELCTED_GAME,
  SET_SELECTED_GAME,
  UPDATE_GAME
} from "../store/modules/game/Game.module";
import {GET_USER} from '../store/modules/user/user.module'
import CategorySearchBar from "../components/CategorySearchBar";
import GoogleMap from "../components/GoogleMap";
import GamesListVut from "../components/GamesListVut";
import KeyWords from '../components/KeyWords'
export default {
  name: "HomePage",
  data() {
    return {};
  },
  created() {
    EventBusService.$emit(SHOW_LOADER)
    this.$store.dispatch({ type: LOAD_GAMES });
    this.$store.dispatch({ type: LOAD_CATEGORIES });
  },
  computed: {
    games() {
      return this.$store.getters[GET_GAMES];
    },
    gameDetails() {
      return this.$store.getters[GET_SELCTED_GAME];
    },
    selectedCategory() {
      return this.$store.getters[GET_SELECTED_CATEGORY];
    },
    user(){
      return this.$store.getters[GET_USER]
    }
  },
  watch: {
    selectedCategory() {
      let ctgId = this.selectedCategory._id
      
      this.$store.dispatch({ type: LOAD_GAMES , ctgId});
    }
  },
   methods: {
    unselectGame() {
      this.$store.commit({ type: SET_SELECTED_GAME, gameId: null });
    },
    userJoinGame(){
      let game = arguments[0]
      game.players.push({
        id: this.user._id,
        name: this.user.name,
        imgUrl: this.user.imgUrl
      })
      this.$store.dispatch({type: UPDATE_GAME, game})

    }
  },
   components: {
    CategorySearchBar,
    GoogleMap,
    GamesListVut,
    KeyWords
  },
};
</script>

<style scoped>
h1 {
  font-family: var(--primary-font);
  color: var(--font-main-color);
}
.main-game-info {
  display: flex;
}
.game-list {
  margin-right: 100px;
}
.key-words{
  height: 220px;
}
</style>





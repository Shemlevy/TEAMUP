<template>
  <section >
    <!--<category-search-bar></category-search-bar>-->
    <section class="main-game-info">
      <games-list-vut v-if="games" :games="games" :selectedCategory="selectedCategory"></games-list-vut>
      <google-map v-if="games" ></google-map> 
    </section>
  </section>
</template>

<script>
import {
  LOAD_CATEGORIES,
  GET_SELECTED_CATEGORY
} from "../store/modules/category/Category.module";
import {
  LOAD_GAMES,
  GET_GAMES,
  GET_SELCTED_GAME,
  SET_SELECTED_GAME
} from "../store/modules/game/Game.module";
import CategorySearchBar from "../components/CategorySearchBar";
import GoogleMap from "../components/GoogleMap";
import GamesListVut from "../components/GamesListVut";

export default {
  name: "HomePage",
  data() {
    return {
      
    };
  },
  components: {
    CategorySearchBar,
    GoogleMap,
    GamesListVut
  },
  methods: {
    unselectGame() {
      this.$store.commit({ type: SET_SELECTED_GAME, gameId: null })
    }
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
    }
  },
  created() {
    this.$store.dispatch({ type: LOAD_GAMES });
    this.$store.dispatch({ type: LOAD_CATEGORIES });
  },
  watch: {
    selectedCategory() {
      console.log("hi");
      this.$store.commit({ type: SET_SELECTED_GAME, categoryId: null });
      // console.log('categoryId',categoryId)
    }
  }
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
</style>





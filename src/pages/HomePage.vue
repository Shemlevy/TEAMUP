<template>
  <section >
    <category-search-bar></category-search-bar>
    <section class="main-game-info">
      <category-list v-if="games" :games="games"></category-list>
      <category-detailes v-if="gameDetails" :details="gameDetails"></category-detailes>
      <google-map></google-map>
    </section>
  </section>
</template>

<script>
import {LOAD_CATEGORIES, GET_SELECTED_CATEGORY} from '../store/modules/category/Category.module'
import {LOAD_GAMES, GET_GAMES,GET_SELCTED_GAME, SET_SELECTED_GAME} from '../store/modules/game/Game.module'
import categoryDetailes from '../team/cmps/categoryDetailes';
import categoryList from '../team/cmps/categoryList';
import CategorySearchBar from '../components/CategorySearchBar';
import GoogleMap from '../components/GoogleMap';

export default {
  name: 'HomePage',
  data() {
    return {
      teamOb: {
        category: "volybool",
        logo: "logo",
        name: "fun-voly",
        type: "public",
        membersCount: 10,
        membersLimit: 12,
        Location: {
          adress: "shenkin 42, tel aviv"
        },
        schedule: "25/12/17"
      }
    };
  },
  components: {
    categoryDetailes,
    categoryList,
    CategorySearchBar,
    GoogleMap
  },
  methods:{
    loadGames(){
      this.$store.dispatch({type: LOAD_GAMES})
    }
  },
  computed:{
    games(){
      return this.$store.getters[GET_GAMES]
    },
    gameDetails(){
      return this.$store.getters[GET_SELCTED_GAME]
    },
    selectedCategory(){
      return this.$store.getters[GET_SELECTED_CATEGORY]
    }
  },
  created(){
    this.$store.dispatch({type: LOAD_GAMES});
    this.$store.dispatch({type: LOAD_CATEGORIES})
    
  },
  watch:{
    selectedCategory(){
      console.log('hi')
      this.$store.commit({type: SET_SELECTED_GAME , categoryId: null})
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: var(--primary-font);
  color: var(--font-main-color);
}
.main-game-info{
  margin: 20px 10px 10px 10px;
  /* width: 100vw; */
  display: flex;
}
</style>





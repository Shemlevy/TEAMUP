<template>
 <section>
   <input class="search-input" @input="filterByValue" @keydown.enter="updateCategory" v-model="inputValue" type="text"/>
   
 </section>
</template>

<script>
import {
  SET_CATEGORY_FILTER,
  GET_CATEGORIES_BY_FILTER,
  SET_SELECTED_CATEGORY
} from "../store/modules/category/Category.module";
import { LOAD_GAMES } from "../store/modules/game/Game.module";

export default {
  name: "SearchBar",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    filterByValue() {
      // we just save the input nothging more
      this.$store.commit({ type: SET_CATEGORY_FILTER, input: this.inputValue });
    },
    updateCategory() {
      // we actually chagnw some staff
      console.log({catgories: this.categories, msg: 'we are in update cattagory'})
      this.$store.dispatch({
        type: LOAD_GAMES,
        categoryId: this.categories[0]._id
      });

      
      console.log({catgories: this.categories, msg: 'we are after the dispatch'})
      
      this.$store.commit({
        type: SET_SELECTED_CATEGORY,
        categoryId: this.categories[0]._id
      });
    }
  },
  computed: {
    categories() {
      return this.$store.getters[GET_CATEGORIES_BY_FILTER];
    }
  }
};
</script>


<style scoped>
.search-input {
  margin: 10px;
  padding: 8px;
  width: 48vw;
  font-size:1em;
  font-family: var(--secondery-font);
  border: none;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.747);
}
</style>

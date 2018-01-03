<template>
    <section  class="selector-container">
            <v-select class="my-selector" v-if="categoriesName" :items="categoriesName" label="Select Category" v-model="a1" autocomplete></v-select>
  </section>
</template>

<script>
import { GET_CATEGORIES_NAME,SET_SELECTED_CATEGORY } from "../store/modules/category/Category.module";

export default {
  data() {
    return {
      a1: '',
    };
  },
  computed: {
    categoriesName() {
      return this.$store.getters[GET_CATEGORIES_NAME];
    }
  },
  watch: {
    a1() {
      if (!this.a1) return            
      this.$store.commit({
        type: SET_SELECTED_CATEGORY,
        categoryName: this.a1
      });
    }
  }
};
</script>

<style scoped>


</style>





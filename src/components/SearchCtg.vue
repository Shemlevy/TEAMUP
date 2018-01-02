<template>
  <v-card style="margin:0; height:64px;" color="grey darken-4" flat>
    <v-card-text  class="search-input">
      <v-container style="padding:0 0 0 16px" fluid >
        <v-layout row wrap >
          <v-flex >
            <v-select v-if="categoriesName"
              :items="categoriesName"
              v-model="a1"
              label="Select"
              autocomplete
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>



<script>
import { GET_CATEGORIES_NAME,SET_SELECTED_CATEGORY } from "../store/modules/category/Category.module";

export default {
  data() {
    return {
      a1: 'Tennis',
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
.search-input {
  width: 200px;
  height: 48px;
  padding: 0;
  margin: 0;
}
</style>

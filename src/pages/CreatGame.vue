<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="main-container">
        <!-- <v-card-media class="create-game-img" height="450px" :src="coverImg">
        </v-card-media> -->
        <v-card-media height="450px">
        <img :src="coverImg">
        </v-card-media>
        <div class="form-container">
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field>
            <v-select label="Select Category" v-if="categories" v-model="category" :items="categories" :rules="[v => !!v || 'Category is required']" required></v-select>
            <section v-if="currAddress">
              <label style="color:gray;">Location*</label><div>{{currAddress.address}}</div> <hr style="border-top: 1px solid gray;">
            </section>
            <v-text-field name="input-7-1" v-model="about" label="About the game" multi-line></v-text-field>
            <v-text-field label="Player limit" v-model="playerLimit" :rules="limitRules" required></v-text-field>
            <v-select label="Game Level" v-model="level" :items="levels"></v-select>
            <date-picker @timeSend="timeSend($event)" required></date-picker>
            <v-btn  @click="submit" >Create</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-form>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
import {GET_CURR_ADDRESS} from "../store/modules/map/Map.module";
import {GET_CATEGORIES,GET_CATEGORIES_NAME} from "../store/modules/category/Category.module";
import DatePicker from "../components/DatePicker";
import {GET_USER} from "../store/modules/user/user.module";
import {CREATE_GAME} from '../store/modules/game/Game.module';

export default {
  data: () => ({
    valid: false,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    limitRules: [
      v => !!v || "Limit is required",
      v => (v && /^[0-9]*$/.test(v)) || "Must be a number"
    ],
    categories: null,
    levels: ["Beginners", "Semi-Pro", "Pro"],
    coverImg: 'http://res.cloudinary.com/dkp5cwwjh/image/upload/v1514999728/SportCover_wqrk3l.png',
    date: null,
    name: "",
    level: "",
    category: null,
    playerLimit: null,
    about: null
  }),
  methods: {
    submit() {
      this.$refs.form.validate();
      if (this.checkValidation()) {
        var newGame = {
          name: this.name,
          category: this.categoryObjs.find(category => category.name === this.category),
          location: this.currAddress,
          time: this.date,
          about: this.about,
          players: [
          {
            id: this.user._id,
            imgUrl: this.user.imgUrl,
            name: this.user.name
          }],
          playerLimit: +this.playerLimit,
          level: this.level
          }
        console.log('befor dispatching', newGame)
        this.$store.dispatch({type: CREATE_GAME, newGame})
          .then(res => {
            this.$router.push(`game/${res._id}`)
          })
      }
    },
    checkValidation() {
      if ( this.name && this.date && this.category && this.playerLimit && this.level) {
        return true;
      } else {
        return false;
      }
    },
    timeSend(date) {
      this.date = date;
    },
    clear() {
      this.$refs.form.reset();
    }
  },
  created() {
    this.categories = this.$store.getters[GET_CATEGORIES_NAME];
  },
  computed: {
    currAddress() {
      return this.$store.getters[GET_CURR_ADDRESS];
    },
    user() {
      return this.$store.getters[GET_USER];
    },
    categoryObjs(){
      return this.$store.getters[GET_CATEGORIES]
    },
    currAddress() {
      return this.$store.getters[GET_CURR_ADDRESS];
    }
  },
  watch:{
    category(){
      let slectedCategory = this.categoryObjs.find(category => category.name === this.category)
      this.coverImg = slectedCategory.url
    }
  },
  components: {
    DatePicker
  }
};
</script>



<style scoped>
.form-container{
  padding: 50px;
}
img{
  box-sizing: border-box;
}
</style>

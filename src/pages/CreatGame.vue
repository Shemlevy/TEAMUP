<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="main-container">
        <v-card-media class="white--text" height="450px" :src="coverImg">
        </v-card-media>
          <form>
            <h1>Create New Game</h1>
            <v-select label="Choose Game Category"  v-model="ctg" :items="categoriesName" :error-messages="selectErrors"
              @change="$v.ctg.$touch()" @blur="$v.ctg.$touch()" required></v-select>
            <v-text-field label="Name" v-model="name" :error-messages="nameErrors" :counter="10"
              @input="$v.name.$touch()" @blur="$v.name.$touch()" required></v-text-field>
            <section v-if="currAddress">
               
              <label style="color:gray;">Location*</label>
              <div>{{currAddress.address}}</div> 
              <hr style="border-top: 1px solid gray;">
            </section>
            <!-- need to add validation -->
            <v-text-field v-else label="Location" v-model="location" @input="$v.location.$touch()"
              @blur="$v.location.$touch()" required></v-text-field>

            <v-text-field name="input-7-1" label="About the game" multi-line></v-text-field>
            <v-text-field label="Player limit" mask="##" v-model="playerLimit"></v-text-field>
              
            <v-select label="Game Level" v-model="gamePower" :items="power" :error-messages="levelErrors"
              @change="$v.level.$touch()" @blur="$v.level.$touch()" required single-line auto hide-details>
            </v-select>
            <br>
            <date-picker @timeSend="timeSend($event)" :error-messages="selectErrors"
              @change="$v.date.$touch()" @blur="$v.date.$touch()" required>
            </date-picker>

            <v-flex xs10 offset-xs8>
              <v-btn class="main-btn" color="primary" @click="submit">Submit</v-btn>
              <!-- <v-btn class="main-btn" outline color="black" @click="clear">clear</v-btn>  -->
            </v-flex>
          </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>



<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import { GET_CURR_ADDRESS } from "../store/modules/map/Map.module";
import {
  GET_CATEGORIES,
  GET_CATEGORIES_NAME
} from "../store/modules/category/Category.module";
import DatePicker from "../components/DatePicker";
import GameService from "../service/game/GameService.js";
import { GET_USER } from "../store/modules/user/user.module";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    location: { required },
    ctg: { required },
    date: { required },
    level: { required }
  },
  data() {
    return {
      name: "",
      location: "",
      ctg: null,
      power: ["Beginners", "Semi-Pro", "Pro"],
      date: null,
      playerLimit: null,
      level: null,
      coverImg: "../../static/memebers-img/bek.jpg"
    };
  },
  methods: {
    timeSend(date) {
      this.date = date;
    },
    submit() {
      this.$v.$touch();
      var gameObj = {
        category: this.categories.find(ctg => ctg.name === this.ctg),
        name: this.name,
        location: this.currAddress,
        time: this.date,
        players: [
          {
            id: this.user._id,
            imgUrl: this.user.imgUrl,
            name: this.user.name
          }
        ],
        playerLimit: this.playerLimit,
        level: this.level
      };
      GameService.createGame(gameObj);
      console.log("inside submit", { gameObj });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.location = "";
      this.select = null;
    }
  },
  watch: {
    gamePower() {
      console.log('gamePowr:',gamePower,'this',this);
      switch (gamePower) {        
        case value:
          "Beginners";
          this.level = 1;
          break;
        case value:
          "Semi-Pro";
          this.level = 2;
          break;
        case value:
          "Pro";
          this.level = 3;
          break;
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters[GET_USER];
    },
    selectedCtg() {
      return this.categories.find(ctg => ctg.name === this.ctg);
    },
    categories() {
      return this.$store.getters[GET_CATEGORIES];
    },
    categoriesName() {
      return this.$store.getters[GET_CATEGORIES_NAME];
    },
    selectErrors() {
      const errors = [];
      if (this.selectedCtg) this.coverImg = this.selectedCtg.url;
      if (!this.$v.ctg.$dirty) return errors;
      !this.$v.ctg.required && errors.push("Category is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    levelErrors() {
      const errors = [];
      if (!this.$v.level.$dirty) return errors;
      !this.$v.level.required && errors.push("Level is required");
      return errors;
    },
    currAddress() {
      return this.$store.getters[GET_CURR_ADDRESS];
    }
  },
  components: {
    DatePicker
  }
};
</script>

<style scoped>
form {
  font-family: var(--secondery-font);
  padding: 50px;
}
.main-container {
  box-shadow: 2px 6px 24px rgba(0, 0, 0, 0.6);
}
h1 {
  font-family: var(--primary-font);
  font-size: 3em;
  color: var(--font-secondery-color);
  height: 3em;
  text-shadow: 2px 2px 4px black;
  -webkit-animation: colorchange 20s infinite alternate;
}

@-webkit-keyframes colorchange {
  0% {
    color: rgb(150, 150, 212);
  }
  10% {
    color: #8e44ad;
  }
  20% {
    color: #1abc9c;
  }
  30% {
    color: #d35400;
  }
  40% {
    color: rgb(75, 161, 64);
  }
  50% {
    color: #f59ce6;
  }
  60% {
    color: rgb(255, 208, 0);
  }
  70% {
    color: #5cb1eb;
  }
  80% {
    color: #f1c40f;
  }
  90% {
    color: #2980b9;
  }
  100% {
    color: pink;
  }
}
</style>

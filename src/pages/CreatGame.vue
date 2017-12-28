<template>
<section class="cg-container">
    <form>
        <h1>Create New Game</h1>
        <h2>Choose Category:
        <select class="ctg-drop-down" v-model="ctg" >
        <option  v-for="item in items"  :value="item" :key="item">{{item}} </option>   
        </select>
        </h2>
        <v-text-field
        label="Name"
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        required
        ></v-text-field>
        <v-text-field
        label="Location"
        v-model="location"
        @input="$v.location.$touch()"
        @blur="$v.location.$touch()"
        required
        ></v-text-field>
        <v-layout row wrap>
        <v-flex md12 lg4>
        <v-date-picker class="date-picker" v-model="picker"></v-date-picker>
        </v-flex>
        </v-layout>
        <v-btn class="main-btn" @click="submit">submit</v-btn>
        <v-btn class="main-btn" @click="clear">clear</v-btn>
    </form>
  </section>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    location: {required},
    select: { required }
  },
  data() {
    return {
      name: "",
      ctg: {},
      location: "",
      select: null,
      items: ["Category 1", "Category 2", "Category 3", "Category 4"],
      picker: null
     
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
      var gameObj={
      gameName: this.name,
      gameLocation: this.location,
      gameCategory: this.ctg,
      GameDate: this.picker
      }
      console.log('inside submit', {gameObj});
     
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.location = "";
      this.select = null;
    }
  },
  computed: {
    // checkboxErrors() {
    //   const errors = [];
    //   if (!this.$v.checkbox.$dirty) return errors;
    //   !this.$v.checkbox.required && errors.push("You must agree to continue!");
    //   return errors;
    // },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    }
    
    
  
  }
};
</script>

<style scoped>
.cg-container {
  margin: 0 auto;
  width: 600px;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  font-family: var(--secondery-font);
  padding: 50px;
}
h1{
  font-family: var(--secondery-font);
  font-size: 2em;
  /* color: var(--font-main-color); */
  color: black;
  height: 3em; 
  opacity: 0.9; 
  /* text-shadow: 2px 2px 4px black;   */
}
h2 {
  font-family: Arial;
  color: black;
  font-size:16px;
  font-weight:normal
 
}
.ctg-drop-down{
font-family: Arial;
font-size: 16px;
width: 70%;
}

.date-picker{
  width: 70%;
}


</style>

<template>
<section class="cg-container">
    <form>
        <h1>Create New Game</h1>
        <v-select
        label="Choose Game Category"
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
        required
        ></v-select>
        <v-text-field
        label="Name"
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
        required
        ></v-text-field>
        <label style="color:gray;">Location*</label>
        <div>{{currAddress}}</div> 
        <hr style="border-top: 1px solid gray;">
        <br>

        <!--********** if we let the use pick a place input for it******** -->
        <!-- <v-text-field
        label="Location"
        v-model="location"
        @input="$v.location.$touch()"
        @blur="$v.location.$touch()"
        required
        ></v-text-field> -->
        <date-picker></date-picker>
        <v-btn class="main-btn" @click="submit">Submit</v-btn>
        <v-btn class="main-btn" @click="clear">clear</v-btn>

       
    </form>
  </section>
</template>


<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import { GET_CURR_ADDRESS } from "../store/modules/map/Map.module";
import DatePicker from '../components/DatePicker'

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(10) },
    location: { required },
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
      var gameObj = {
        gameName: this.name,
        gameLocation: this.location,
        gameCategory: this.ctg,
        GameDate: this.picker,
        Select: this.select
      };
      console.log("inside submit", { gameObj });
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.location = "";
      this.select = null;
    }
  },
  computed: {
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
    },
    currAddress() {
      return this.$store.getters[GET_CURR_ADDRESS];
    }
  },
  components:{
    DatePicker
  }
};
</script>

<style scoped>
.cg-container {
  margin: 0 auto;
  background-color: rgb(255, 255, 255);
  padding: 10px;
  font-family: var(--secondery-font);
  padding: 50px;
  box-shadow: 2px 2px 8px black;
}
h1 {
  font-family: var(--primary-font);
  font-size: 3em;
  color: var(--font-secondery-color);
  height: 3em;
}

</style>

<template>
 <section class="container">
   <div v-for="ctg in ctgsName" :key="ctg">
     <h2 class="word" @click="setCtg(ctg)" :style="ctgSize[ctg]">{{ctg}}</h2>
   </div>
 </section>
</template>

<script>
import { GET_GAME_REPS } from "../store/modules/game/Game.module";
import {
  GET_CATEGORIES_NAME,
  SET_SELECTED_CATEGORY
} from "../store/modules/category/Category.module";

export default {
  data() {
    return {};
  },
  computed: {
    ctgsName() {
      return this.$store.getters[GET_CATEGORIES_NAME];
    },
    ctgSize() {
      return this.$store.getters[GET_GAME_REPS];
    }
  },
  methods: {
    setCtg(ctg) {
      this.$store.commit({
        type: SET_SELECTED_CATEGORY,
        categoryName: ctg
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  width: 600px;
  justify-content: center;
  justify-self: center;
}

.word {
  font-family: var(--primary-font);
  line-height: 25px;
  font-size: 25px;
  padding: 13px;
  color: whitesmoke;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
}

@-webkit-keyframes word {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}

@keyframes word {
  50% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }

  100% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
}

.word:hover,
.word:focus,
.word:active {
  text-shadow: 1px 1px 20px black;
  -webkit-animation-name: word;
  animation-name: word;
  -webkit-animation-duration: 0.15s;
  animation-duration: 0.15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>

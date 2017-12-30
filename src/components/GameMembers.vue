<template>
  <carousel-3d >
    <section  v-for="(item,i) in items" :key="i">
  <slide :index="i" class="slide" style="height: 150px; width:200px; border-radius:25% ">
    <img :src="item.src" > 
  </slide>
  </section>
</carousel-3d>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
  export default {
    data () {
      return {
        items: [
          {
            src: '../../static/memebers-img/messi.jpg'
          },
          {
            src: '../../static/memebers-img/bek.jpg'
          },
          {
            src: '../../static/memebers-img/ronaldo.jpg'
          }
        ]
      }
    },
  components: {
    Carousel3d,
    Slide
  }
  }
</script>

<style scoped>
</style>

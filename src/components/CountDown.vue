<template>
<section class="conatin">
    <section v-if="show" class="count-down">
    <div class="block">
        <p class="digit">{{ days | two_digits }}</p>
        <p class="text">Days</p>
    </div>
    <div class="block">
        <p class="digit">{{ hours | two_digits }}</p>
        <p class="text">Hours</p>
    </div>
    <div class="block">
        <p class="digit">{{ minutes | two_digits }}</p>
        <p class="text">Min</p>
    </div>
    <div class="block">
        <p class="digit">{{ seconds | two_digits }}</p>
        <p class="text">Sec</p>
    </div>
  </section>
  <section class="no-game" v-else>
    Game has passed
  </section>
</section>

</template>

<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);    
    let gameTime = this.$moment(this.game.time.date + '' + this.game.time.hour, "YYYY-MM-DD HH:mm" )
    let timeStamp = gameTime.valueOf()

    this.date = timeStamp/1000
    if (this.now > this.date) this.show = false    
  },
  props: ['game'],
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      show: true,
      date: {
      type: Number,
      coerce: str => Math.trunc(Date.parse(str) / 1000)
    }
    };
  },
  computed: {
    seconds() {      
      return (this.date - this.now) % 60;
    },

    minutes() {
      return Math.trunc((this.date - this.now) / 60) % 60;
    },

    hours() {
      return Math.trunc((this.date - this.now) / 60 / 60) % 24;
    },

    days() {
      return Math.trunc((this.date - this.now) / 60 / 60 / 24);
    }
  }
};
</script>

<style scoped>
.conatin{
  width:160px;
}
.no-game{
  text-align: center;
}
.count-down{
  display: flex;
  width:auto;
  justify-content: space-around;
  
}
.block {
  display: flex;
  flex-direction: column;
}

.text {
  color: #413838;
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 5px;
  padding:2px;
  text-align: center;
}

.digit {
  color: #ffffff;
  background-color:var(--third-color);
  border-radius: 10px;
  padding: 4px;
  font-size: 12px;
  font-weight: 600;
  margin: 5px;
  box-shadow: 1px 0px 10px grey;
  width:30px;
  text-align: center;
}
</style>


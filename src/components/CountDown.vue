<template>
  <section class="count-down">
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
        <p class="text">Minutes</p>
    </div>
    <div class="block">
        <p class="digit">{{ seconds | two_digits }}</p>
        <p class="text">Seconds</p>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: Number,
      coerce: str => Math.trunc(Date.parse(str) / 1000)
    }
  },

  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
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
.count-down{
  display: flex;
}
.block {
  display: flex;
  flex-direction: column;
  
}

.text {
  color: #1abc9c;
  font-size: 10px;
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
}

.digit {
  color: #ecf0f1;
  font-size: 15px;
  font-weight: 100;
  font-family: "Roboto", serif;
  margin: 5px;
  text-align: center;
}
</style>


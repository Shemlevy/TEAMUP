<template>
  <section class="main-container">
    <section class="box">
      <h1>{{data}}</h1>
    </section>
  </section>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      show: true
    };
  },
  methods: {
    closeDialog() {
      this.$emit("close-dialog");
    }
  }
};
</script>

<style scoped>
.main-container {
  z-index: 4;
  width:100vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(59, 59, 59, 0.685);
}
.box {
  padding:10px;
  text-align:center;
  width: 100vw;
  height: 200px;
  background-color: var(--nav-color);
  color: white;
  position: absolute;
  top: 25%;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

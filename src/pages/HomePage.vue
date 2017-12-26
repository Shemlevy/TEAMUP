<template>
  <section>
    <h1>TEAMUP</h1>
    <Detailes :teamOb="teamOb"></Detailes>
  </section>
</template>

<script>
import Detailes from '../team/cmps/Detailes'
export default {
  name: 'HomePage',
  data() {
    return {
      teamOb:{
        category: "volybool",
        logo: "logo",
        name: "fun-voly",
        type: "public",
        membersCount: 10,
        membersLimit: 12,
        Location:{
          adress:"shenkin 42, tel aviv"
        },
        schedule: "25/12/17"
      }
    };
  },
  components:{
    Detailes
  }
};
</script>

<style scoped>
h1{
    font-family: var(--primary-font);
    color: var(--font-main-color);  
}

</style>

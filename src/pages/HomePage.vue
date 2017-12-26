<template>
  <section>
       <Nav></Nav>
    <!-- TODO:erasethis -->
    <button>test btn bring category</button> 
    <!-- TODO: end of erase -->
    <category-list v-if="games" :games="games"></category-list>
    <category-detailes :teamOb="teamOb"></category-detailes>
    
 
  </section>
</template>

<script>
import categoryDetailes from "../team/cmps/categoryDetailes";
import categoryList from "../team/cmps/categoryList";
import Nav from "../components/Nav";

export default {
  name: "HomePage",
  data() {
    return {
      teamOb: {
        category: "volybool",
        logo: "logo",
        name: "fun-voly",
        type: "public",
        membersCount: 10,
        membersLimit: 12,
        Location: {
          adress: "shenkin 42, tel aviv"
        },
        schedule: "25/12/17"
      },
      games: [
        {
          id: 1,
          membersCount: 8,
          membersLimit: 12,
          Location: {
            adress: "shenkin 42, tel aviv"
          }
        },
        {
          id: 2,
          membersCount: 10,
          membersLimit: 12,
          Location: {
            adress: "rohama 18, tel aviv"
          }
        },
        {
          id: 3,
          membersCount: 12,
          membersLimit: 12,
          Location: {
            adress: "habonim 04, tel aviv"
          }
        }
      ]
    };
  },
  components: {
    categoryDetailes,
    Nav,
    categoryList
  }
};
</script>

<style scoped>
h1 {
  font-family: var(--primary-font);
  color: var(--font-main-color);
}
</style>





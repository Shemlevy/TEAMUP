<template>
   <section class="team-detailes">
        <div>
            <img src="" alt="" srcset="">
            <div class="info-area">
                <h2>category: {{teamOb.category}}</h2>
                <h2>logo: {{teamOb.logo}}</h2>
                <h2>team-name: {{teamOb.name}}</h2>
                <h2>team-type: {{teamOb.type}}</h2>
                <h2>number of members: {{teamOb.membersCount}} / {{teamOb.membersLimit}}</h2>
                <h2>adress: {{teamOb.Location.adress}}</h2>
                <h2>next game: {{teamOb.schedule}}</h2>
            </div>
        </div>
        <div class="btn-area">
            <button>teamUp</button>
            <button>next</button>
        </div>
    </section>

</template>

<script>
export default {
  props: ["teamOb"],
  data() {
    return {};
  }
};
</script>

<style scoped>

.team-detailes{
display: flex;
flex-direction: column;
align-items: center;
height: 90vh;
width: 90vh;
background-color:rgb(55,103,200);
}

.info-area {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: 70vh;
  width: 70vh;
}
h2 {
  font-family: Helvetica;
  color: var(--font-main-color); 
}
.btn-area{
    display: flex;
    justify-content: space-between;
    
}
</style>








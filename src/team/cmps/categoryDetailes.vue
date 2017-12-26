<template>
   <section class="team-detailes">
        <div>
            <img src="" alt="" srcset="">
            <div class="info-area">
                <div class="logo">
                    <h1>{{teamOb.category}} </h1>
                    <h1>{{teamOb.logo}}</h1>
                </div>
                <h2>Team-name: &nbsp; <span>{{teamOb.name}}</span></h2>
                <h2>Team-type: &nbsp; <span> {{teamOb.type}}</span></h2>
                <h2>Number of members: &nbsp; <span> {{teamOb.membersCount}} / {{teamOb.membersLimit}}</span></h2>
                <h2>Adress: &nbsp; <span>{{teamOb.Location.adress}}</span></h2>
                <h2>Next game: &nbsp; <span> {{teamOb.schedule}}</span></h2>
            </div>
        </div>
        <div class="btn-area">
            <button>Join</button>
            <button>Next</button>
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
position: relative;
left: 500px;
align-items: center;
height: 90vh;
width: 90vh;
}

.info-area {
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 50vh;
}

.btn-area{
    display: flex;
    justify-content: space-between;
    width: 50vh;
    
}
.logo{
    display: flex;
    justify-content: space-between;
    
}
h2 {
 
  font-family: Helvetica;
  color: var(--font-main-color);
  height: 2em; 
  text-shadow: 1px 1px 2px black;  
}
h1{
  font-family: Helvetica;
  font-size: 2em;
  color: var(--font-main-color);
  height: 3em; 
  text-shadow: 2px 2px 4px peru;  
}
h2 > span{
  font-family: Helvetica;
  color: var(--font-main-color);
  text-shadow: 1px 1px 2px peru;  
  height: 1em;
    
}
</style>








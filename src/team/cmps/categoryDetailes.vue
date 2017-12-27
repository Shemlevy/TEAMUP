<template>
   <section class="team-detailes">
        <div>
            <div class="info-area">
                <div class="logo">
                    <img :src="details.logo" />
                    <!-- TODO: add category to detailes service -->
                    <h1>{{details.category}} </h1>
                </div>
                <h2>Team-name: &nbsp; <span>{{details.name}}</span></h2>
                <h2>Team-type: &nbsp; <span> {{details.type}}</span></h2>
                <h2>Number of members: &nbsp; <span> {{details.members.length}} / {{details.membersLimit}}</span></h2>
                <h2>Game-location: &nbsp; <span>{{details.location.address}}</span></h2><br>
                <h2>Next game: &nbsp; <span> {{details.schedule}}</span></h2>
            </div>
        </div>
        <div class="btn-area">
            <button class="main-btn" >TEAM<span>up</span></button>
        </div>
    </section>

</template>

<script>
export default {
  props: ["details"],
  data() {
    return {};
  }
};
</script>

<style scoped>

.team-detailes{
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    align-items: center;
}

.info-area {
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 50vw;
}

.btn-area{
    display: flex;
    justify-content: space-between;
    width: 50vw;
    
}
.logo{
    display: flex;
    justify-content: space-between;   
}
.logo img {
    width:150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 30px;
}
h2 {
  font-family: var(--secondery-font);
  color: var(--font-main-color);
  height: 2em; 
  text-shadow: 1px 1px 2px black;  
}
h1{
  font-family: var(--secondery-font);
  font-size: 2em;
  color: var(--font-main-color);
  height: 3em; 
  text-shadow: 2px 2px 4px peru;  
}
h2 > span{
  font-family: var(--secondery-font);
  color: var(--font-main-color);
  text-shadow: 1px 1px 2px peru;  
  height: 1em;
    
}
</style>








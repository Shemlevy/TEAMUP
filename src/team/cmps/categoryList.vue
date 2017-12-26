<template>
   <section class="team-list">
       <ul>
            <li  v-for="game in games" :key="game.id">
                <ul class="game-item">
                    <li>
                        {{game.membersCount}} / {{game.membersLimit}} 
                    </li>
         
                    <li>
                        {{game.Location.adress}}
                    </li>
                </ul>
            </li>
        </ul>
    </section>

</template>

<script>
export default {
  props: ["games"],

  data() {
    return {};
  }
};
</script>

<style scoped>
.team-list {
  display: flex;
  flex-direction: column;
  position: relative;
  left: 500px;
  align-items: center;
  height: 90vh;
  width: 90vh;
}
h2 {
  font-family: Helvetica;
  color: var(--font-main-color);
  height: 2em;
  text-shadow: 1px 1px 2px black;
}
h1 {
  font-family: Helvetica;
  font-size: 2em;
  color: var(--font-main-color);
  height: 3em;
  text-shadow: 2px 2px 4px peru;
}
.game-item {
  background-color: peru;
  border-style: solid;
  border-width: 1px;
}
ul{
    list-style-type: none;
}
</style>








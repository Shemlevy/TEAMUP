<template>
  <v-layout row wrap>
    <v-flex xs4 sm4 md3 lg4 offset-sm0 v-for="(player,i) in game.players" :key="i">
      <v-container fill-height fluid grid-list-sm>      
        <v-card>
          <v-card-media
            class="white--text"
            height="100px"
            :src="player.imgUrl"
          >   
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">{{player.name}}</span><br>
              <span></span><br>
              
            </div>
          </v-card-title>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    props: ["game"]
}
</script>

<style scoped>

  .card {
    width: 100%
  }
</style>



<template>
  <section style="z-index:2;width:50%">
    <v-layout row>
      <v-flex xs12 sm12 offset-sm0>
        <v-card>
            <div class="ctg-selector-container">
            <ctg-selector></ctg-selector>
            </div>
            <v-spacer></v-spacer>
          <v-list three-line dark>
          <v-list-tile v-if="!games">No games to display</v-list-tile> 
          <template v-for="(game , i) in games">
          <v-divider v-if="i > 0" :key="i"></v-divider>
          <v-list-tile>
            <v-list-tile>
              <v-list-tile-avatar>
                <img src="../../static/memebers-img/Soccer.jpg">
              </v-list-tile-avatar> 
            </v-list-tile>
              <v-list-tile-content>
                <v-layout row>
                  <v-list-tile-sub-title style="width: 150px;">{{game.name}}</v-list-tile-sub-title>
                  <!-- <v-avatar class="avatar-area" v-for="n in game.level" :key="n" size="20px">
                    <img src="../../static/icons/iconmuscle.png" alt="avatar">
                  </v-avatar> -->
                  <v-list-tile-sub-title>
                    <button class="main-btn" @click="emitJoin(game)">TEAM<span>UP</span></button>
                  </v-list-tile-sub-title>
                  <v-list-tile-sub-title>
                    <button class="main-btn" @click="showDetPage(game._id)">detailes</button>
                  </v-list-tile-sub-title>
                </v-layout>
                <v-list-tile-sub-title>{{game.players.length}}&nbsp;/&nbsp;{{game.playersLimit}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{game.time.date}} {{game.time.hour}}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{game.location.address}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>


<script>
import { SET_SELECTED_GAME } from "../store/modules/game/Game.module";
import CategorySearchBar from "../components/CategorySearchBar";
import CtgSelector from "../components/CtgSelector";

export default {
  props: ["games", "selectedCategory"],
  data() {
    return {
      iconRank: "star",
      iconPic: "../../static/icons/iconmuscle.png",
    };
  },
  methods: {
    onGameClicked(game) {
      this.$store.commit({ type: SET_SELECTED_GAME, gameId: game._id });
    },
    showDetPage(gameId){
      this.$router.push(`/game/${gameId}`);
    },
    emitJoin(game){
      this.$emit('userJoinGame', game)
    }
  },
  components:{
    CategorySearchBar,
    CtgSelector
  }
  
  
};
</script>
<style>
.ctg-selector-container{
  width: 100%
}
</style>


                        
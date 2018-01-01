<template>
    <section style="z-index:2;width:40%">
        <v-layout row>
            <v-flex xs12 sm12 offset-sm0>
            <v-card>
                <v-toolbar dark>
                <v-toolbar-title>
                  <category-search-bar></category-search-bar>
                  <!-- CategorySearcBar -->
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
                </v-toolbar>
                
                <v-list three-line dark>
                        <template v-for="(game , i) in games">
                        <!-- <v-subheader v-if="item.header" v-text="item.header"></v-subheader> -->
                          <v-divider v-if="i > 0" :key="i"></v-divider>
                          <v-list-tile>
                            <v-list-tile>
                              <v-list-tile-avatar>
                                <img src="../../static/memebers-img/Soccer.jpg">
                              </v-list-tile-avatar> 
                            </v-list-tile>
                            <v-list-tile-content>
                                <v-layout row>
                                  <v-list-tile-sub-title style="width: 150px;"> 
                                  {{game.name}} 
                                  </v-list-tile-sub-title>
                                  <v-avatar class="avatar-area" v-for="n in game.rank" :key="n" size="20px">
                                      <img src="../../static/icons/iconmuscle.png" alt="avatar">
                                  </v-avatar>
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

export default {
  props: ["games", "selectedCategory"],
  data() {
    return {
      iconRank: "star",
      iconPic: "../../static/icons/iconmuscle.png"
     
    };
  },
  methods: {
    onGameClicked(game) {
      this.$store.commit({ type: SET_SELECTED_GAME, gameId: game._id });
    }
  },
  components:{
    CategorySearchBar
  }
  
};
</script>
<style>

</style>


                        
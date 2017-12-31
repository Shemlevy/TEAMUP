<template>
    <section style="z-index:2;">
        <v-layout row>
            <v-flex xs12 sm12 offset-sm0>
            <v-card>
                <v-toolbar dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Search</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>
                </v-toolbar>
                <v-list two-line dark>
                <template v-for="(game,i) in games">
                    <!-- <v-subheader v-if="item.header" v-text="item.header"></v-subheader> -->
                    <v-divider v-if="i > 0" :key="i"></v-divider>
                    <v-list-tile avatar  @click="">
                    <v-list-tile-avatar>
                         <img src="../../static/memebers-img/Soccer.jpg"></v-list-tile-avatar> 
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="game.name"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="game.time.date"></v-list-tile-sub-title>
                        <v-list-tile-sub-title v-html="game.location.address"></v-list-tile-sub-title>
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
export default {
  props: ["games", "selectedCategory"],
  data() {
    return {
      items: [
        { header: "soccer" },
        {
          avatar: "../../static/memebers-img/Soccer.jpg",
          title: "Brunch this weekend?",
          subtitle:'shem'
        },
        { divider: true, inset: true }
      ]
    };
  },
  methods: {
    onGameClicked(game) {
      this.$store.commit({ type: SET_SELECTED_GAME, gameId: game._id });
    }
  }
};
</script>
<style>

</style>
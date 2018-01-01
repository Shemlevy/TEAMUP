<template>
  <v-layout row wrap>
    <v-flex xs11 sm12>
      <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition"
        offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
        <v-text-field slot="activator" label="Set Date" v-model="date" prepend-icon="event"
          readonly required></v-text-field>
        <v-date-picker v-model="date" no-title scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex xs11 sm12>
      <v-menu lazy :close-on-content-click="false" v-model="menu2"
            transition="scale-transition" offset-y full-width :nudge-right="40"
            max-width="290px" min-width="290px">
        <v-text-field slot="activator" label="Set Time" v-model="time"
            prepend-icon="access_time" readonly required></v-text-field>
        <v-time-picker v-model="time" autosave></v-time-picker>
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    date: null,
    menu: false,
    modal: false,
    time: null,
    menu2: false,
    modal2: false,
    fullDate: {}
  }),
  watch: {
    time() {
      this.fullDate = {
        date: this.date,
        hour: this.time
      };
      this.$emit("timeSend", this.fullDate);
    }
  }
};
</script>
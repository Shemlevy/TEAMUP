<template>
  <v-layout row wrap>
    <v-flex xs11 sm12>
      <v-menu lazy :close-on-content-click="false" v-model="menu" transition="scale-transition"
        offset-y full-width :nudge-right="40" max-width="290px" min-width="290px">
        <v-text-field slot="activator" label="Set Date" v-model="date" prepend-icon="event"
          readonly required></v-text-field>
        <v-date-picker v-model="date" no-title scrollable actions :allowed-dates="allowedDates" >
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
        <v-time-picker
        class="mt-3"
        scrollable
        v-model="time"
        format="24hr"
        :allowed-hours="allowedTimes"
      ></v-time-picker>
        <!-- <v-time-picker v-model="time" autosave :allowed-hours="allowedTimes.hours" :allowed-minutes="allowedTimes.minutes"></v-time-picker> -->
      </v-menu>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    date: null,
    presentDate: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    time: null,
    menu2: false,
    modal2: false,
    fullDate: {},
    allowedDates: {min: new Date().toISOString().substr(0, 10)},
    allowedTimes: {}
  }),
  watch: {
    time() {
      this.fullDate = {
        date: this.date,
        hour: this.time
      };
      this.$emit("timeSend", this.fullDate);
    },
    date(){
      if(this.date !== this.presentDate){
        this.allowedTimes= {
          min: '1AM',
          max: '12PM',
        }}else{
        var date = new Date();
        var hours = date.getHours();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        if(hours > 12) hours -= 12
        this.allowedTimes = {
          min: hours.toString()+ampm,
           max: '11PM'
        }
      }
    }
  },
};
</script>
<template>
  <div>
    <v-app-bar color="grey lighten-4" flat tile fixed style="margin-top:60px;">
    <v-toolbar>
      <v-btn to="/salesman/visits" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    
      <v-toolbar-title class="ml-12"> Visits</v-toolbar-title>
    </v-toolbar>
</v-app-bar>
      <v-container class="mt-4">

    <v-row>

      <v-col cols="6" lg="6">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="computedDateFormatted"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
        </v-menu>
        
      </v-col>
        <v-spacer></v-spacer>
        
        <v-col cols="6" lg="6" class="mt-6">
        <v-btn to="/salesman/visits/extra-visit"  depressed small color="green"> + Extra Visit </v-btn>
        </v-col>
    </v-row>
    <Visits />
    
      </v-container>
  </div>
</template>
<script>
import Visits from "~/components/Visits";
export default {
  layout: "salesman",
  components: {
    Visits
  },
  data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  
};
</script>

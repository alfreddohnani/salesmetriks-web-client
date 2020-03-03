<template>

  <div>
    <v-app-bar color="grey lighten-4" flat tile fixed style="margin-top:60px;">
    <v-toolbar>
      <v-btn to="/salesman/visits" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    
      <v-toolbar-title class="ml-12"> ExtraVisits</v-toolbar-title>
    </v-toolbar>
</v-app-bar>
    <v-container class="mt-10">
    <ExtraVisits/>
    
    <div>
      <v-layout>
        <v-spacer></v-spacer>
        <v-btn block depressed small color="green">+ Add </v-btn>
      </v-layout>
    </div>
    </v-container>
  </div>
</template>
<script>
import ExtraVisits from "~/components/ExtraVisits";
export default {
  layout: "salesman",
  components: {
    ExtraVisits
  },
  
};
</script>

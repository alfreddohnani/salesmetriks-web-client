<template>
  <div>
      <v-container>

    <div>

      <v-layout>
        <v-spacer></v-spacer>
        
        <v-btn to="/salesman/visits/extra-visit" block  depressed small color="green"> + Extra Visit </v-btn>
      </v-layout>
    </div>
    <CustomerCard />
    <nuxt />
      </v-container>
  </div>
</template>
<script>
import CustomerCard from "~/components/CustomerCard";
export default {
  layout: "salesman",
  components: {
    CustomerCard
  },
  methods:{
      addCard(){
          return ('/salesman/visits/extravisits')
      }
  },
  data: () => ({
    items: [
      {
        id: "1",
        outlet: "East Legon",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "2",
        outlet: "East Legon",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "3",
        outlet: "East Legon",
        name: "Felix Mensah",
        contact: "233539642047"
      }
    ]
  })
};
</script>

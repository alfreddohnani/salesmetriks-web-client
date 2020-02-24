<template>
  <div>
    <v-container>
    <CustomerCard />
    <nuxt />
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
import CustomerCard from "~/components/CustomerCard";
export default {
  layout: "salesman",
  components: {
    CustomerCard
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

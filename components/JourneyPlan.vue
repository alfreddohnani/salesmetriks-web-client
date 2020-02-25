<template>
  <div>
    <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-layout justify-center align-center row wrap>
        <v-card :id="item.id" dark flat color="#B9C0C8" width="1000px">
          <div class="d-flex flex-wrap justify-space-around">
            <v-card-actions>
              <v-icon class="black--text ">mdi-account</v-icon>
              
                <v-card-text class="black--text ">{{ item.id }} </v-card-text>

                <v-card-text class="black--text ">
                  {{ item.outlet }}</v-card-text
                >

                <v-card-text class="black--text ">
                  {{ item.coverage }}</v-card-text
                >
              </v-card-actions>
            
          </div>
        </v-card>
      </v-layout>
    </v-col>
  </div>
</template>

<script>
export default {
  layout: "salesman",
  data: () => ({
    items: [
      {
        id: "ID:GH06121D",
        outlet: "Outlet:Graces Enterprise, Legon",
        coverage: "2/20 "
      },
      {
        id: "ID:GH06122D",
        outlet: "Outlet:Melcom Enterprise, Legon",

        coverage: "2/20"
      },
      {
        id: "ID:GH06124D",
        outlet: "Outlet:Hope Shop, Madina",

        coverage: "2/20"
      },
      {
        id: "ID:GH06125D",
        outlet: "Outlet:East Legon Seller",

        coverage: "2/20"
      },
      {
        id: "ID:GH06126D",
        outlet: "Outlet:M&N Enterprise, Legon",

        coverage: "2/20"
      }
    ]
  })
};
</script>



<template>
  <div>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-layout justify-center align-center row wrap>
          <v-card :id="item.id" dark flat color="#B9C0C8" width="600px">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-icon class="black--text ">mdi-account</v-icon>
              <v-card-subtitle
                class="black--text "
                v-text="item.outlet"
              ></v-card-subtitle>

              <v-card-subtitle
                class="black--text "
                v-text="item.name"
              ></v-card-subtitle>
              <v-card-subtitle
                class="black--text "
                v-text="item.contact"
              ></v-card-subtitle>
            </div>
          </v-card>
        </v-layout>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "salesman",
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
      },
      {
        id: "3",
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

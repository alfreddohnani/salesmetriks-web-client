<template>
  <div>
    <v-row dense>

      <v-col v-for="(item, i) in items" :key="i" cols="12">
        
        <v-card :id="item.id" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              
              <v-icon >mdi-account</v-icon>
              <v-card-subtitle class="" v-text="item.outlet"></v-card-subtitle>

              <v-card-subtitle v-text="item.name"></v-card-subtitle>
              <v-card-subtitle v-text="item.contact"></v-card-subtitle>
            </div>
          </div>
        </v-card>
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
      }
    ]
  })
};
</script>

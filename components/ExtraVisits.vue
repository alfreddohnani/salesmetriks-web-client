<template>
  <div>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-layout justify-center align-center row wrap>
          <v-card
            :id="item.id"
            dark
            flat
            color="#B9C0C8"
            width="800px"
            class="d-inline-block mx-auto"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-card-actions>
                <v-row class="flex-row ma-0 fill-height" justify="center">
                  <v-col cols="auto" class="text-center pl-0">
                    <v-col class="px-0">
                      <v-icon class="teal--text ">mdi-account-check </v-icon>
                    </v-col>
                  </v-col>

                  <v-col cols="auto">
                    <v-card-title class="black--text "
                      >{{ item.id }}
                    </v-card-title>

                    <v-card-text class="black--text ">
                      {{ item.outlet }}</v-card-text
                    >
                  </v-col>
                  <v-col>
                    
                      <v-checkbox
                        color="teal"
                        input-value="true"
                        value
                      ></v-checkbox>
                    
                  </v-col>
                </v-row>
              </v-card-actions>
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
        id: "GHC45D4",
        outlet: "Grace Entreprise",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "GHC45D4",
        outlet: "Grace Entreprise",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "GHC45D4",
        outlet: "Grace Entreprise",
        name: "Felix Mensah",
        contact: "233539642047"
      }
    ],
    
  })
};
</script>

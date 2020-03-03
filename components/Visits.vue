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
                  <v-col class="top-left" >
                    <v-icon class="black--text ">mdi-account </v-icon>
                  </v-col>
                  <v-col class="bottom-left">
                    <v-badge color="pink" content="1">
                      <v-icon class="black--text ">mdi-office-building</span></v-icon>
                    </v-badge>
                  </v-col>
                  
                </v-col>

                <v-col cols="auto">
                  <v-card-title class="black--text "
                    >{{ item.id }}
                  </v-card-title>

                  <v-card-text class="black--text ">
                    {{ item.outlet }}</v-card-text
                  >
                  
                      <v-col  >
                    <v-btn to="/salesman/visits/customer-details" rounded depressed small color="green" class="check-in-bottom-right mr-2"> Check In </v-btn>

                  </v-col>
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
        id: "BNMGCHDA123",
        outlet: "Grace Enterprise",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "GCHDB2",
        outlet: " Grace Enterprise",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "GCHDC3",
        outlet: "Grace Enterprise",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "GCHDD4",
        outlet: "Grace Enterprise",
        name: "Felix Mensah",
        contact: "233539642047"
      },
      {
        id: "GCHDE5",
        outlet: "Grace Entreprise",
        name: "Felix Mensah",
        contact: "233539642047"
      }
    ]
  })
};
</script>
<style scoped>
.check-in-bottom-right{
    position: absolute;
    bottom: 15px;
    right: 0px;

}
.bottom-left{
     position: absolute;
    bottom: 5px;
    right:150px;
}
.top-left{

}
</style>

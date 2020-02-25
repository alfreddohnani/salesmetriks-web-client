<template>
  <div >
      <v-col v-for="(item, i) in items" :key="i" cols="12">
      <v-layout justify-center align-center 
      row wrap>
    <v-card :id="item.id" dark flat color="#B9C0C8"  width="300px">
      
          <div class="d-flex flex-no-wrap justify-space-between">
              
                         
              <v-card-actions>
                  <v-icon class="black">mdi-account</v-icon>
                </v-card-actions>
              <v-card-subtitle class="black--text " v-text="item.name"></v-card-subtitle>
              <v-card-subtitle class="black--text " v-text="item.amount"></v-card-subtitle>
              <v-card-subtitle class="black--text " v-text="item.duration"></v-card-subtitle>
              <v-card-actions>
                  <v-icon class="black--text">mdi-arrow-right</v-icon>
                </v-card-actions>
            
          </div>
        
    </v-card>
    
    </v-layout>
    </v-col>
    <div class=""><p><strong>TOTAL:</strong></p></div>
  </div>
</template>
<script>
export default {
  layout: "salesman",
  data: () => ({
    items: [
      {
        name: "Felix Mensah",
        amount: "GHC 32343",
        duration: "10"
      },
      {
        name: "Felix Mensah",
        amount: "GHC 15782",
        duration: "9"
      },
      {
       name: "Felix Mensah",
        amount: "GHC 1000",
        duration: "47"
      },
      {
       name: "Felix Mensah",
        amount: "GHC 1000",
        duration: "47"
      },
      {
       name: "Felix Mensah",
        amount: "GHC 1000",
        duration: "47"
      }
      
    ]
  })
};
</script>

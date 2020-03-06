<template>
    <div>
       <v-app-bar color="grey lighten-4" flat tile fixed style="margin-top:60px;">
    <v-toolbar>
      <v-btn to="/salesman" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      
      <v-toolbar-title class='ml-12'> Price</v-toolbar-title>
    </v-toolbar>
       </v-app-bar>
            <template>
  <v-row class="d-flex mt-12" justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      
      <template v-slot:activator="{ on }">
        <v-btn class="right mt-4" color="primary" dark v-on="on" rounded>Add</v-btn>
      </template>
      <v-card>
        <v-card-actions>
            <v-spacer></v-spacer><v-icon color='red' >mdi-close-circle-outline</v-icon>
        </v-card-actions>
        <v-card-text>
          <v-container>
            <v-row>

        

        <v-col cols="12" sm="6" md="3">
           
        <v-select
          :items="items"
          label="Brand"
          solo
        ></v-select>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Solo"
            placeholder="Price Range"
            solo
            disabled
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Solo"
            placeholder="Current Price"
            solo
          ></v-text-field>
        </v-col>

        
        </v-col>

      </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          
          <v-row class="d-flex justify-center mt-8 " ><v-btn  color="blue darken-1" text @click="dialog = false">Save</v-btn></v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

        <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      
    >
      <template v-slot:default>
        
        <thead>
          <tr>
            <th class="text-left">Brand</th>
            <th class="text-left">Price Range</th>
            <th class="text-left">Current Price</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in stock" :key="item.name">
            <td>{{ item.brand }}</td>
            <td>{{ item.pricerange }}</td>
            <td>{{ item.currentprice }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
         <v-row class="d-flex justify-center mt-8 " ><v-btn to ="salesman/stock-operations/sales-order" rounded color="teal">Next</v-btn></v-row>
  
  </v-card>
               



   
  </div>
</template>
    
<script>
export default {
 data: () => ({
      dense: false,
      fixedHeader: false,
      dialog:false,
      stock: [
        {
          brand: 'Frozen Yogurt',
          pricerange: 'GHc5-GHc 20',
          currentprice:18,
        },
        
        {
          brand: 'Pepsodent',
          pricerange: 'GHc5-GHc25',
          currentprice:115,
        },
        {
          brand: 'Colgate',
          pricerange: 'GHc10-GHc22',
          currentprice:15,
        },
        
      ],
      items:['pepsodent','yoghurt'],
    }),
  }
</script>
<style scoped>
.right{
  position: absolute;
  right:0px;
  bottom:500px;

}
</style>
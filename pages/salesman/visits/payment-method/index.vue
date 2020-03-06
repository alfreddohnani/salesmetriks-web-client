<template>
    <div>
        <v-row class="d-flex justify-center">
        <v-card >
            <v-row>
               <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">PAY</v-btn>
      </template>
      <v-card>
        <v-card-actions>
            <v-spacer></v-spacer><v-icon color='red' >mdi-close-circle-outline</v-icon>
        </v-card-actions>
        <v-card-text>
          <v-container>
            <v-row>

        <v-col cols="12" sm="6" md="3">
            <v-card-title>TOTAL(GHc)</v-card-title>
          <v-text-field
            label="Solo"
            placeholder="Cash"
            solo
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
            label="Solo"
            placeholder="Credit"
            solo
          ></v-text-field>
        </v-col>

        
        </v-col>

      </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          
          <v-row >
               <v-btn  color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
               <v-spacer></v-spacer>
              <v-btn to="salesman/stock-operations/invoice" color="blue darken-1" class="mr-2">Next</v-btn>
              </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
                
            </v-row>
        </v-card>
        </v-row>
    </div>
</template>
<script>
export default {
   layout:'salesman',
    data () {
      return {
        dialog: false,
      }
    },
  }</script>
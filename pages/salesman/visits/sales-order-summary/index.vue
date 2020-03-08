<template>
    <v-container>
<v-app-bar color="grey lighten-4" flat tile fixed style="margin-top:60px;">
      <v-toolbar>
        <v-btn to="/salesman/stock-operations/" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title class="mr-2"> Sales Order Summary</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>
      <v-data-table
        hide-default-footer
        :search="search"
        :headers="headers"
        :items="products"
        class="elevation-1"
      >

  
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
  
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
     <v-card class="mt-2">
    <v-row
      
      class="font-weight-medium "
    >
      
       
          <v-col cols="6">Total</v-col>
        <v-col cols="6">GHc :56687</v-col>
       
   
     <v-row class="mt-6 ml-4">
      <v-col  cols='6' class="mt-2">
        <v-btn to="/salesman/visits/stock">Cancel</v-btn>
        
      </v-col>
      <v-col cols="6" class="mt-2">
        <v-dialog  v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">CONFIRM</v-btn>
      </template>
      <v-card>
        <v-card-actions>
            <v-spacer></v-spacer><v-icon color='red' >mdi-close-circle-outline</v-icon>
        </v-card-actions>
        </v-card->
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

        

      </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          
          <v-row >
               <v-btn  color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
               <v-spacer></v-spacer>
              <v-btn to="/salesman/visits/invoice" color="blue darken-1" class="mr-2">Next</v-btn>
              </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-col>
      
     </v-row>
      
    </v-row>
    
  </v-card>
  
    </v-container>
  </template>
  <script>
  export default {
      layout:'salesman',
    data: () => ({
      brands: ["pepsodent", "yoghurt"],
      search: "",
      headers: [
        {
          text: "Brand",
          align: "start",
          sortable: false,
          value: "name"
        },
        
        { text: "Pack", value: "pack", sortable: false },
        { text: "Unit ", value: "unit", sortable: false },
         { text: "Price  GHc", value: "price", sortable: false },
        { text: "Actions", value: "action", sortable: false }
      ],
  
      products: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        pack: 0,
        unit: 0,
        price: '150,000',
      },
      defaultItem: {
        name: "",
        pack: 0,
        unit: 0,
        price: '2500',
      }
    }),
  
    computed: {
      formTitle() {
        return this.editedIndex === -1 ? "New Item" : "Edit Item";
      }
    },
  
    watch: {
      dialog(val) {
        val || this.close();
      }
    },
  
    created() {
      this.initialize();
    },
  
    methods: {
      initialize() {
        this.products = [
          {
            name: "Cocacola",
            pack: 5,
            unit: 10,
            price: "24,000"
          },
          {
            name: "Colgate",
            pack: 5,
            unit: 10,
            price: "24,000"
          },
  
          {
            name: "Pepsodent",
            pack: 5,
            unit: 10,
            price: "24,000"
          }
        ];
      },
  
      editItem(item) {
        this.editedIndex = this.products.indexOf(item);
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
      },
  
      deleteItem(item) {
        const index = this.products.indexOf(item);
        confirm("Are you sure you want to delete this item?") &&
          this.products.splice(index, 1);
      },
  
      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        }, 300);
      },
  
      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.products[this.editedIndex], this.editedItem);
        } else {
          this.products.push(this.editedItem);
        }
        this.close();
      }
    }
  };
  </script>
  
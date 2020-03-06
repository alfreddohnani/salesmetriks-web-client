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
        <template> </template>
      </v-data-table>
     <v-card height="75px" class="mt-2">
    <v-row
      absolute
      class="font-weight-medium "
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <v-row><v-col cols="6">Total</v-col>
        <v-col cols="6">GHc :56687</v-col></v-row>
      </v-col>
     
      <v-col cols='6' class="mt-2">
        <v-btn>Cancel</v-btn>
        
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6" class="mt-2">
       <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
      </v-col>
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
  
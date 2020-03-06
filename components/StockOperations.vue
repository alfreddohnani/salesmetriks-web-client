<template>
  <div>
     <v-toolbar>
      <v-btn to="/salesman" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Stock Operations</v-toolbar-title>
    </v-toolbar>
      
      <v-card class="mt-2" height="65px">
      <v-row>
        <v-col> <v-card-title >ID:UNI312</v-card-title> </v-col>
      <v-col> <v-card-title class="d-flex justify-end " >DAY:02/20/20</v-card-title></v-col>
      </v-row>
      
     
      </v-card>
  
    <v-card>
    <v-toolbar
      color=""
      dark
      flat
      height="5px"
      dense=""
      class="mt-1"
    >
     

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab
            v-for="n in status"
            :key="id"
          >
             {{ n.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
          <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">Request Stock</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-select
          :brandy="brandy"
         
          label="Brand"
        ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.boxsize" label="BoxSize"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.qty" label="Qty"></v-text-field>
                  </v-col>
                 
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
        
        
      </v-tab-item>
      
      <v-tab-item>
                    <v-simple-table
      :dense="dense"
      :fixed-header="fixedHeader"
      
    >
      <template v-slot:default>
        
        <thead>
          <tr>
            <th class="text-left">Brand</th>
            <th class="text-left">Box Size</th>
            <th class="text-left">Qty</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in stock" :key="item.id">
            <td>{{ item.brand }}</td>
            <td>{{ item.boxsize }}</td>
            <td>{{ item.qty }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn rounded>Approved<v-icon color="teal"> mdi-check-circle</v-icon></v-btn>
      </v-tab-item>
      
    </v-tabs-items>
  </v-card>
    


   
  </div>
</template>
<script>
  export default {
    
    data: () => ({
      brandy:['Pepsodent', 'Cocacola','Omo'],
      dialog:false,
      dense: false,
      fixedHeader: false,
      tabs:null,
      
      status:[
        {
          name:'Requested'
        },
        {
          name:'Status '
        }
        ,
      ],
      stock: [
        {
          brand: 'Frozen Yogurt',
          boxsize: 24,
          qty:5,
        },
        
        {
          brand: 'Pepsodent',
          boxsize: 24,
          qty:5,
        },
        {
          brand: 'Colgate',
          boxsize: 24,
          qty:5,
        },
        {
          brand: 'Omo',
          boxsize: 24,
          qty:5,
        },
        {
          brand: 'Cocacola',
          boxsize: 24,
          qty:5,
        },
      ],
      
    
    headers: [
        {
          text: 'Brand',
          align: 'start',
          
          value: 'name',
        },
        { text: 'Box Size ', value: 'boxsize' },
        { text: ' Qty', value: 'qty' },
        
        
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        boxsize: 0,
        qty: 0,
        
      },
      defaultItem: {
        name: '',
        boxsize: 0,
        qty: 0,
        
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Pepsodent',
            boxsize: 12,
            qty: 24,
          },
          {
            name: 'Colgate',
            boxsize: 12,
            qty: 24,
          },
          
          
          {
            name: 'Omo',
            boxsize: 12,
            qty: 24,
            
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },


     save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>


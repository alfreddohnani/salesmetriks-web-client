<template>
  <v-container>
    <v-data-table
      hide-default-footer
      :search="search"
      :headers="headers"
      :items="products"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar>
          <v-btn to="/salesman" icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-toolbar-title>Sales Order</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>

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
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="mb-2 mt-2" v-on="on" rounded
          >Add</v-btn
        >
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-select :brands="brands" label="Brand" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.pack"
                  label="Pack"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.unit"
                  label="Unit"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
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
      { text: "Price", value: "price", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],

    products: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      pack: 0,
      unit: 0,
      price: 0
    },
    defaultItem: {
      name: "",
      pack: 0,
      unit: 0,
      price: 0
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


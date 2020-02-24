<template>
  <v-app id="inspire">
    <template>
      <v-card>
        <v-toolbar color="indigo" dark flat>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Customer Universe</v-toolbar-title>

          <v-spacer></v-spacer>

          
        </v-toolbar>
      <v-card><v-tabs
      v-model="tab"
      background-color="primary"
      dark
      centered
    >
      <v-tab
        v-for="customer in customers"
        :key="customer.tab"
      >
        {{ customer.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="customer in customers"
        :key="customer.tab"
      >
        <v-row dense>

      <v-col v-for="(item, i) in items" :key="i" cols="12">
        
        <v-card :id="item.id" dark  >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              
              <v-icon >mdi-account</v-icon>
              <v-card-subtitle class="" v-text="item.outlet"></v-card-subtitle>

              <v-card-subtitle v-text="item.name"></v-card-subtitle>
              <v-card-subtitle v-text="item.contact"></v-card-subtitle>
              <v-icon>mdi-arrow-right</v-icon>
              
          </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
      </v-tab-item>
    </v-tabs-items></v-card>

       
      </v-card>
    </template>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        customers: [
          { tab: 'Total ', content: 'Tab 1 Content' },
          { tab: 'Active', content: 'Tab 2 Content' },
          { tab: 'Pending', content: 'Tab 3 Content' },
        ],
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
      }
    },
  }
</script>
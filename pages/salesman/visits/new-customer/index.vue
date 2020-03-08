<template>
    <v-container>
      <v-app-bar color="grey lighten-4" flat tile fixed style="margin-top:60px;">
    <v-toolbar>
      <v-btn to="/salesman" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    
      <v-toolbar-title class="ml-4">New Customer Details</v-toolbar-title>
    </v-toolbar>
    </v-app-bar>
        </v-row>
        <v-row class=mt-8>
          
            <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
           <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Outlet"
            required
          ></v-text-field>
           <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Location"
            required
          ></v-text-field>
           <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="GPS"
            required
          ></v-text-field>
           <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Contact"
            required
          ></v-text-field>
          </v-row>

        </v-row>
    </v-container>
</template>
<script>
  export default {
    layout:"salesman",
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
        
  })
  }
</script>
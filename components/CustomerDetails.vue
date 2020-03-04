<template>
    <v-container>
        <v-row class="wdth=50px">
          <v-row class="ml-2 black--text" >
            <v-list-item-avatar tile>
              <v-icon color="black">mdi-account</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                <v-text-field
            value="50"
            label="Target"
            
            outlined
            disabled
            class="mr-2 mt-4 "
          
          
          ></v-text-field>

              </v-list-item-title>
              <v-list-item-title
                class="pb-4"
              
              ><v-text-field
            value="0.35%"
            label="Actual"
            outlined
            disabled
            class="mr-2 mt-4 "
          ></v-text-field>
          
</v-list-item-title>
<v-list-item-title
                class="pb-4"
              
              ><v-text-field
            value="0.35%"
            label="Weight"
            
            outlined
            disabled
            class="mr-2 mt-4 "
          ></v-text-field>
          
</v-list-item-title>
              <v-list-item-title
                class="pb-4"
              
              ></v-list-item-title>

              <v-list-item-title
                class="pb-4"
                
              >
              <v-text-field
            value="40%"
            label="Sales Perfomance"
            outlined=""
            disabled
            class="mr-2 mt-4 "
          ></v-text-field>
</v-list-item-title>
            </v-list-item-content>
          </v-row>

        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row align="center">
   
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="name"
        
        :rules="nameRules"
        label="ID"
        required
      ></v-text-field>

      <v-text-field
        v-model="name"
        
        :rules="nameRules"
        label="Outlet"
        required
      ></v-text-field>

     <v-text-field
        v-model="name"
        
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        
        :rules="nameRules"
        label="Contact"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        
        :rules="nameRules"
        label="Location"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        
        :rules="nameRules"
        label="Salesman"
        required
      ></v-text-field>
    </v-form>
  </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" sm="6" md="3">
            </v-col>
            <v-col cols="6" sm="6" md="3">
          <v-text-field
            label="Outlined"
            outlined
          ></v-text-field>
        </v-col>
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
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
        
  })
  }
</script>
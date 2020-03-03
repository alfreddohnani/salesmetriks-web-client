<template>
    <v-container>
        <v-row></v-row>
        <v-row>
            <v-col cols="12">
                <v-row align="center">
   
    <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
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
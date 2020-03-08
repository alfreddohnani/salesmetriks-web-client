<template>
    <v-container>
      <v-app-bar color="grey lighten-4" flat tile fixed style="margin-top:60px;">
    <v-toolbar>
      <v-btn to="/salesman" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    
      <v-toolbar-title class="ml-4">Customer Details</v-toolbar-title>
    </v-toolbar>
    </v-app-bar>

        <v-row class="wdth=50px mt-6">
          <v-row class="ml-2 black--text" >
            
            <v-list-item-content>
              <v-list-item-title
                <v-text-field
            value="50"
            label="Target"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
              <v-list-item-title
                class="mt-2"
              
              ><v-text-field
            value="20"
            label="Actual"
            outlined
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
          
</v-list-item-title>
<v-list-item-title
                class=""
              
              ><v-text-field
            value="0.35%"
            label="Weight"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
          
</v-list-item-title>
              <v-list-item-title
                class=""
              
              ></v-list-item-title>

              <v-list-item-title
                class=""
                
              >
              <v-text-field
            value="40%"
            label="Sales Perfomance"
            outlined=""
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
</v-list-item-title>
            </v-list-item-content>
          </v-row>

        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row >
   
            <v-list-item-content>
              <v-list-item-title
                <v-text-field
            value="DNS123"
            label="ID"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
              <v-list-item-title
                class="mt-2"
              
              ><v-text-field
            value="Grace Entrerises"
            label="Outlet"
            outlined
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
          
</v-list-item-title>
<v-list-item-title
                class=""
              
              ><v-text-field
            value="Elizabeth Amani"
            label="Name"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
          
</v-list-item-title>
              
              <v-text-field
            value="+233545963406"
            label="Contact"
            outlined=""
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
</v-list-item-title>  
</v-list-item-title>
              
              <v-text-field
            value="Mallam Junction, Blue Kiosk"
            label="Location"
            outlined=""
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
</v-list-item-title> 
</v-list-item-title>
              
              <v-text-field
            value="Alfred Doh-Nani, GH025000586"
            label="Contact"
            outlined=""
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
</v-list-item-title>           
            </v-list-item-content>
  </v-row>
            </v-col>
        </v-row>
        <v-row class="width=50px">
          <v-row class="ml-2 black-35-text" >
            
            <v-list-item-content>
              <v-list-item-title
                <v-text-field
            value="8"
            label="No. Of Visits for Month"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
              <v-list-item-title
                class="mt-2"
              
              ><v-text-field
            value="GHc -2500"
            label="Current Credit"
            outlined
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
          
</v-list-item-title>
<v-list-item-title
                class=""
              
              ><v-text-field
            value="3"
            label="Actual Visits"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          ></v-text-field>
          
</v-list-item-title>
             <v-list-item-title
                <v-text-field
            value="6"
            label="Visits Deficit "
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
               <v-list-item-title
                <v-text-field
            value="8"
            label="New Target Per Visit"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
              <v-list-item-title
                <v-text-field
            value="2"
            label="New Visit Sales Target"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>
          </v-text-field>

              </v-list-item-title>
              <v-list-item-title
                <v-text-field
            value="30"
            label="Sales Deficit"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
               <v-list-item-title
                <v-text-field
            value="30%"
            label="Brand A Perfomance"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
               <v-list-item-title
                <v-text-field
            value="20%"
            label="Brand B Perfomance"
            
            outlined
            disabled
            class="mr-2 mt-2 "
          
          
          ></v-text-field>

              </v-list-item-title>
            </v-list-item-content>
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
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
        
  })
  }
</script>
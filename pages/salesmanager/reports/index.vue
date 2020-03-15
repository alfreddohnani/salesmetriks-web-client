<template>
  <v-app id="inspire">
    <template>
      <v-card >
        <v-toolbar>
        <v-btn to="/salesman/stock-operations/" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title class="mr-2"> Reports</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-toolbar>
      <v-select
      v-model="select"
      :salesmen="salesmen"
      label="Salesmen">
          
      </v-select>
      <v-card class=" mt-4" :elevation="12" ><v-tabs
      v-model="tab"
      background-color="primary"
      
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
      
   <v-card
      class="d-flex flex-row mt-2  "
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Sales 
        15/30
        
      </v-card-text>
      
        <v-card  class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
   <v-card
      class="d-flex flex-row  "
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Coverage Rate
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="#F0A51F" width="70%" > </v-card>
      <v-card class="right-bar mt-2 mr-2 "  width="30%"
      
      >
        70% 
        
      </v-card>
        
   </v-card>
   <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Success Rate 
        16/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
   <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Drop-Size 
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
   <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  P CPL Score 
        16/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
   
   <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Cash Coll Score 
    25/50
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="#E02735" width="50%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="50%"
      
      >
        50% 
        
      </v-card>
      </v-card>
   <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  JP Adherence 
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
    <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Visits/Call Rate 
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
    <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Rtn Stock Rate
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
    <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Brand Perf A 
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
    <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Brand Perf B
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
    <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Num Dist Brand A
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
    <v-card
      class="d-flex flex-row mt-2"
      color="#ffffff"
      flat
      tile>
        
            <v-card-text class="" >  Num Dist Brand B
        15/30
        
      </v-card-text>
      
        <v-card class="bar mt-2" color="green" width="80%" > </v-card>
      <v-card class="right-bar mt-2 mr-2"  width="20%"
      
      >
        80% 
        
      </v-card>
        
   </v-card>
    </div>
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
    layout:'salesmanager',
    data:()=> ({
      tab: null,
        customers: [
          { tab: 'Daily ', content: 'Tab 1 Content' },
          { tab: 'Weekly', content: 'Tab 2 Content' },
          { tab: 'Monthly', content: 'Tab 3 Content' },
          { tab: 'Yearly', content: 'Tab 3 Content' },
        ],
        select:null,
        salesmen:['Alfred', 'Sally', 'Nana', 'Chekap'],
        
      }
    )
    
        
  
  }
</script>
<style scoped>
.bar{
width:650px;
height:35px;
background-color:#F16335;
}
.right-bar{
width:650px;
height:35px;
background-color:#ffffff;

}
.left-bar{
width:650px;
height:35px;
background-color:#ffffff;
}
.rounded-card{
    border-radius:25px solid red;
}

</style>
<template>

    <div>
         <v-row class=" mb-10">
             <div class="d-flex justify-start">
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title class="">SALESMETRIKS</v-toolbar-title>
            
         </div>
            <v-spacer></v-spacer>
            <div class="d-flex justify-end " >
            <v-btn text rounded class="hidden-sm-and-down"> PRICING</v-btn>
            <v-btn text rounded class="hidden-sm-and-down">SUPPORT</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down pt-2 pb-2" large>SIGN IN</v-btn>
            </div>
         </v-row>
        <v-container fluid  class="landing-image pa-12"  style="max-height: 100vh; ">
        
        <v-layout class=" d-flex justify-center pa-12">
            <div class="pt-12 ">
           <v-card-title class="display-1 font-weight-bold white--text text-center  "> Pioneering the optimization of field sales activities </v-card-title>
           <v-card-subtitle class= "display-1  white--text text-center ">in the FMCG's Industry through Tech.</v-card-subtitle>
            
            <div class="d-flex justify-center pa-12 ">
                <v-btn  class="d-flex  " color="info"  x-large >Demo</v-btn>
            </div>
           
           </div>
            
           
           
        
        </v-layout>
        
        
        
    </v-container>
    </div>
</template>

<script>
import Details from '~/components/Details';
export default {
    components:{
        Details,
    },
};
</script>

<style scoped>
.landing-image {
    box-shadow: 1px 1px 10px #3b4991;
    background-color:#1E254C;
    border-radius: 50px;
    background-size: cover;
    width: 100%;
    height: 550px;
    
}
</style>
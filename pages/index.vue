<template>
  <v-container >
    <BannerImage />
    <v-row class="d-flex justify-center mt-6">
       <div class="pt-12 ">
           <v-card-subtitle class= "display-1  indigo--text text-center ">We help you  monitor, track  and get Insights into field sales activities in real-time. to monitor, track  and get Insights into field sales activities in real-time. to monitor, track  and get Insights into field sales activities in real-time</v-card-subtitle>
            
       </div>. 
        
    
    </v-row>
    <div class="val d-flex justify-center flex-no-wrap">
      <Details/>
    </div>
    <div class=" level">
 <ValueProp/>
    </div>
    <div class="val d-flex justify-center flex-no-wrap">
      <ValueProp/>
    </div>
  </v-container>
</template>in the FMCG's Industry through Tech.
<script>
import BannerImage from "~/components/BannerImage";
import Details from "~/components/Details";
import ValueProp from "~/components/ValueProp";

export default {
  components: {
    BannerImage,
    Details,
    ValueProp
  }
};
</script>
<style scoped>
.val {
    padding: 80px;
  background-color: #f9f9fd;
  height: 500px;
}
.divider{
    height: 300px;
    width:900px;
}
.level{
    padding: 80px;
    background-color:#1E254C;
    height:500px;
}
</style>

<template>
  <div>
    <v-container>
    <JourneyPlan />
    <nuxt />
    
    </v-container>
  </div>
</template>


<script>
import JourneyPlan from "~/components/JourneyPlan";
export default {
  layout: "salesman",
  components: {
    JourneyPlan
  }
};
</script>

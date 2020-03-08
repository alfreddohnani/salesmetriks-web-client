<template>
    <v-container>
        <CustomerDetails/>
    </v-container>
</template>
<script>
import CustomerDetails from '~/components/CustomerDetails'
export default {
  layout: "salesman",
    components:{
        CustomerDetails,
    }
}
</script>
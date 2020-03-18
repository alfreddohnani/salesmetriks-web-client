<template>
    <v-container fluid fill-height>
        <v-row class="d-flex justify-space-around ml-8">
            <v-col>
                <div class="headline mt-3"><v-img src="/ctruck.svg" class="img"  ></v-img></div>
                <v-card-title>Achieve Targets through better performance</v-card-title>
            </v-col>
            <v-col>
                <div class="headline mt-3"><v-img src="/ctruck.svg" class="img"  ></v-img></div>
                <v-card-title>Achieve Targets through better performance</v-card-title>


            </v-col>
            <v-col>
                <div class="headline mt-3"><v-img src="/ctruck.svg" class="img"  ></v-img></div>
                <v-card-title>Achieve Targets through better performance</v-card-title>


            </v-col>
            
        </v-row>
        
    </v-container>
</template>
<script>
import ValueProp from '~/components/ValueProp';

export default {
    components:{
        ValueProp,
    }
    
}
</script>
<style scoped>
.img{
    height: 150px;
    width: 150px;
    border-radius: 50%
}

</style>
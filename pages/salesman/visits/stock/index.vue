<template>
<div>
    <Stock/>
</div>
    
</template>
<script>
import Stock from "~/components/Stock";
export default {
    layout:'salesman',
    components:{
        Stock,
    },
    data:()=>{
        stock: [
        {
          brand: 'Frozen Yogurt',
          boxsize: 24,
          qty:5,
        },
        
        {
          brand: 'Pepsodent',
          boxsize: 24,
          qty:5,
        },
        {
          brand: 'Colgate',
          boxsize: 24,
          qty:5,
        },
        {
          brand: 'Omo',
          boxsize: 24,
          qty:5,
        },
        {
          brand: 'Cocacola',
          boxsize: 24,
          qty:5,
        },
        ]
    }
}
</script>
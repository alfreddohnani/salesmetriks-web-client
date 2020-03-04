<template>
  <div>
    <v-container>
      <customer-card>
        <v-card-actions>
          <v-btn text>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-card-actions>
      </customer-card>

      <customer-card>
        <v-card-actions>
          <v-btn text>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-card-actions>
      </customer-card>

      <customer-card>
        <v-card-actions>
          <v-btn text>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-card-actions>
      </customer-card>

      <customer-card>
        <v-card-actions>
          <v-btn text>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-card-actions>
      </customer-card>
    </v-container>
  </div>
</template>

<script>
import CustomerCard from "~/components/CustomerCard";
export default {
  layout: "salesman-home",
  components: {
    CustomerCard
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="3">
        <menu-card link="/salesman/journey-plan">
          <template #icon>mdi-bus</template>
          <template #title>Journey Plan</template>
        </menu-card>
      </v-col>
      <v-col cols="6" md="3">
        <menu-card link="/salesman/customer-universe">
          <template #icon>mdi-account-group</template>
          <template #title>Customer Universe</template>
        </menu-card>
      </v-col>
      <v-col cols="6" md="3">
        <menu-card link="/salesman/visits">
          <template #icon>mdi-account-check</template>
          <template #title>Visits</template>
        </menu-card>
      </v-col>
      <v-col cols="6" md="3">
        <menu-card link="/salesman/credit-management">
          <template #icon>mdi-currency-usd-off</template>
          <template #title>Credit Management</template>
        </menu-card>
      </v-col>
      <v-col cols="6" md="3">
        <menu-card link="/salesman/stock-options">
          <template #icon>mdi-package-variant</template>
          <template #title>Stock Options</template>
        </menu-card>
      </v-col>
      <v-col cols="6" md="3">
        <menu-card link="/salesman/reports">
          <template #icon>mdi-file-chart</template>
          <template #title>Reports</template>
        </menu-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuCard from "~/components/MenuCard";
export default {
  name: "SalesmanHomePage",
  layout: "salesman-home",
  components: {
    MenuCard
  }
};
</script>

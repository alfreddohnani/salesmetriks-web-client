<template>
  <div class="indigo">
      <v-container>
      <v-row>
        <v-col cols="6" md="3">
          <menu-card link="/salesmanager/reports">
            <template #icon>mdi-file-chart</template>
            <template #title>Reports</template>
          </menu-card>
        </v-col>
         <v-col cols="6" md="3">
          <menu-card link="/salesmanager/customer-universe">
            <template #icon>mdi-account-group</template>
            <template #title>Customer Universe</template>
          </menu-card>
        </v-col>
        <v-col cols="6" md="3">
          <menu-card link="/salesmanager/targets">
            <template #icon>mdi-account-check</template>
            <template #title>Targets</template>
          </menu-card>
        </v-col>
        <v-col cols="6" md="3">
          <menu-card link="/salesmanager/credit-management">
            <template #icon>mdi-currency-usd-off</template>
            <template #title>Credit Management</template>
          </menu-card>
        </v-col>
        <v-col cols="6" md="3">
          <menu-card  link="/salesmanager/notifications">
            <template #icon>mdi-bell-ring-outline</template>
            <template #title>Notifications</template>
          </menu-card>
        </v-col>
        <v-col cols="6" md="3">
          <menu-card link="/salesmanager/help">
            <template #icon>mdi-help-circle-outline</template>
            <template #title>Help</template>
          </menu-card>
        </v-col>
      </v-row>
    </v-container>
      
  </div>
</template>

<script>
import MenuCard from "~/components/MenuCard";

export default {
  layout:'salesmanager',
  components:{
      MenuCard,
  },
  data: () => ({
  
  })
};
</script>

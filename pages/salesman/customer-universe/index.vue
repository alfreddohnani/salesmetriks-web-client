<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="outlet in getAllOutlets"
          :key="outlet._id"
          xs="12"
          sm="12"
          md="4"
        >
          <v-card
            class="pa-0"
            max-width=""

          >
            <v-list-item class="" three-line>
               <v-list-item-avatar
                tile
                size="50"
                color=""
              >        <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar></v-list-item-avatar>
              <v-list-item-content>
                <div class="overline mb-2">ID: {{outlet.uniqueId}}</div>
                <v-list-item-title class="mb-2">{{outlet.name}}</v-list-item-title>
                <v-card-text class="pa-0 mt-2">{{outlet.owner.firstName + " " + outlet.owner.lastName}}</v-card-text>
                <v-card-subtitle class="pa-0 overline">Owner</v-card-subtitle>
                <v-card-text class="pa-0 mt-2"> {{ outlet.location }}</v-card-text>
                <v-card-subtitle class="pa-0 overline">Location</v-card-subtitle>
                <v-card-text class="pa-0 mt-2">{{ outlet.outletContact.telephone}}</v-card-text>
                <v-card-subtitle class="pa-0 overline">Contact</v-card-subtitle>
                <v-card-text class="pa-0 mt-2">{{outlet.assignedSalesman.firstName + " " + outlet.assignedSalesman.lastName}}</v-card-text>
                <v-card-subtitle class="pa-0 overline">Salesrep</v-card-subtitle>
              </v-list-item-content>
            </v-list-item>
            <div class="d-flex pa-1">
              <v-icon color="grey" class="ml-auto">mdi-arrow-right</v-icon>
            </div>

            <!-- <v-card-actions>
              <v-btn text>Button</v-btn>
              <v-btn text>Button</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>
<script>
import CustomerCard from "~/components/CustomerCard";
import outlets from "~/apollo/queries/allOutlets";
export default {
  name: "OutletsPage",
  layout: "salesman",
  data() {
    return {};
  },
  apollo: {
    getAllOutlets: {
      query: outlets,
      prefetch: true
    }
  },
  components: {
    CustomerCard
  }
};
</script>

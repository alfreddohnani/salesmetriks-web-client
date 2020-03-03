<template>
  <salesman-layout>
    <template #pageToolbars>
      <v-container>
        <v-row>
          <v-text-field
            dense
            label="Search"
            prepend-inner-icon="mdi-magnify"
            solo-inverted
            clearable
            dark
            filled
            flat
            outlined
            value=""
            type="text"
            class="mx-4"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-toolbar-title class="mx-auto title font-weight-black">
            Customer Universe
          </v-toolbar-title>
        </v-row>
      </v-container>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <template #extension-slot>
      <v-tabs centered>
        <v-tab>Total</v-tab>
        <v-tab>Active</v-tab>
        <v-tab>Pending</v-tab>
      </v-tabs>
    </template>

    <template #content>
      <v-container>
        <v-row>
          <v-col
            v-for="outlet in getAllOutlets"
            :key="outlet._id"
            xs="12"
            sm="12"
            md="4"
          >
            <customer-card>
              <template #uniqueId>{{ outlet.uniqueId }}</template>
              <template #name>{{ outlet.name }}</template>
              <template #owner>{{
                outlet.owner.firstName + " " + outlet.owner.lastName
              }}</template>
              <template #location>{{ outlet.location }}</template>
              <template #contact>{{ outlet.outletContact.telephone }}</template>
              <template #salesman>{{
                outlet.assignedSalesman.firstName +
                  " " +
                  outlet.assignedSalesman.lastName
              }}</template>
            </customer-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </salesman-layout>
</template>
<script>
import CustomerCard from "~/components/CustomerCard";
import SalesmanLayout from "~/components/SalesmanLayout";
import outlets from "~/apollo/queries/allOutlets";
export default {
  name: "OutletsPage",
  layout: "plain",
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
    CustomerCard,
    SalesmanLayout
  }
};
</script>

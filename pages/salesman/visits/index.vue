<template>
  <div>
    <salesman-layout>
      <template #pageToolbars>
        <back-button class="mr-2" />
        <div class="title font-weight-black">Visits</div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn small icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <nuxt-link to="/salesman/create-outlet">Create Outlet</nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template #content>
        <v-container>
          <v-row class="justify-center">
            <div>
              <v-btn outlined color="indigo" class="text-center"
                ><span>{{ new Date(date).toDateString() }}</span></v-btn
              >
            </div>
          </v-row>
          <v-row
            class="d-flex justify-center"
            v-if="
              getJourneyPlanForSalesman && getJourneyPlanForSalesman.outlets
            "
          >
            <div>
              <customer-card
                class="ma-3"
                v-for="journeyPlan in sortOutletsAsc"
                :key="journeyPlan.outlet._id"
              >
                <template #order>
                  <div class="d-flex justify-space-between pa-2">
                    <div>
                      <v-badge
                        class="pa-2"
                        inline
                        color="indigo lighten-2"
                        dark
                        :content="journeyPlan ? journeyPlan.order : 0"
                      >
                        <v-icon color="indigo lighten-2">mdi-map-marker</v-icon>
                      </v-badge>
                    </div>

                    <div>
                      <v-btn
                        :href="`/salesman/visits/${journeyPlan.outlet._id}`"
                        dark
                        rounded
                        color="indigo"
                        >Check in</v-btn
                      >
                    </div>
                  </div>
                </template>
                <template #uniqueId>{{ journeyPlan.outlet.uniqueId }}</template>
                <template #name>{{ journeyPlan.outlet.name }}</template>
                <template #owner>
                  {{
                    journeyPlan.outlet.owner.firstName +
                      " " +
                      journeyPlan.outlet.owner.lastName
                  }}
                </template>
                <template #contact>
                  {{ journeyPlan.outlet.outletContact.telephone }}
                </template>
              </customer-card>
            </div>
          </v-row>

          <v-row class="d-flex justify-center grey--text" v-else
            >No visits availble for today</v-row
          >
        </v-container>
      </template>
    </salesman-layout>
  </div>
</template>

<script>
import SalesmanLayout from "~/components/SalesmanLayout";
import BackButton from "~/components/BackButton";
import CustomerCard from "~/components/CustomerCard";
import journeyPlanForSalesman from "~/apollo/queries/getJourneyPlanForSalesman";

export default {
  name: "VisitsPage",
  layout: "plain",
  components: {
    SalesmanLayout,
    BackButton,
    CustomerCard
  },
  data() {
    return {
      salesman_id: "5e6b5a5131c43200175423bd",
      date: new Date().toISOString().substr(0, 10),
      journeyPlanForSalesman: {},
      loading: 0
    };
  },
  computed: {
    sortOutletsAsc() {
      return this.getJourneyPlanForSalesman &&
        this.getJourneyPlanForSalesman.outlets
        ? this.getJourneyPlanForSalesman.outlets.sort(
            (a, b) => a.order - b.order
          )
        : [];
    }
  },
  apollo: {
    getJourneyPlanForSalesman() {
      return {
        query: journeyPlanForSalesman,
        prefetch: true,

        variables() {
          return {
            salesman_id: this.salesman_id,
            date: Date.parse(this.date).toString()
          };
        }
      };
    }
  }
};
</script>

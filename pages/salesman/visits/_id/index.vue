<template>
  <div>
    <salesman-layout>
      <template #pageToolbars>
        <back-button class="mr-2" />
        <div class="title font-weight-black">Visit - {{ getOutlet.name }}</div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn small icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              Extra Visit
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template #content>
        <v-container>
          <div>
            <div :loading="$apollo.loading" class="">
              <!-- <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img> -->
              <div class="text-center">
                <div class="my-5">
                  <v-avatar size="80" color="indigo">
                    <v-icon size="80" dark>mdi-account-circle</v-icon>
                  </v-avatar>
                </div>

                <div>
                  <div class="subtitle-1 text-uppercase">
                    {{ getOutlet.name }}
                  </div>
                  <div class="overline mb-1">
                    ID:
                    {{ getOutlet.uniqueId }}
                  </div>
                </div>

                <div>
                  X%
                  <div class="overline mb-1">
                    Weight
                  </div>
                </div>

                <div class="my-4">
                  <v-btn
                    small
                    rounded
                    outlined
                    :color="getOutlet.status == 'pending' ? 'red' : 'green'"
                    >{{ getOutlet.status }}</v-btn
                  >
                  <v-card-subtitle class="overline">Status</v-card-subtitle>
                </div>

                <div class="my-4">
                  <div>
                    <v-btn
                      class="mx-1 overline"
                      small
                      rounded
                      outlined
                      color="indigo"
                      v-for="day in getOutlet.target.visitDaysPerWeek"
                      :key="getOutlet.target.visitDaysPerWeek.indexOf(day)"
                    >
                      {{ day }}
                    </v-btn>
                  </div>
                  <v-card-subtitle class="overline">Visit Days</v-card-subtitle>
                </div>
              </div>

              <div>
                <v-row>
                  <v-col sm="6" md="3">
                    <div class="my-4">
                      {{
                        getOutlet.owner.firstName +
                          " " +
                          getOutlet.owner.lastName
                      }}
                      <v-card-subtitle class="pa-0 overline"
                        >Owner</v-card-subtitle
                      >
                    </div>
                  </v-col>
                  <v-col sm="6" md="3">
                    <div class="my-4">
                      {{ getOutlet.outletContact.telephone }}
                      <v-card-subtitle class="pa-0 overline"
                        >Telephone</v-card-subtitle
                      >
                    </div>
                  </v-col>
                  <v-col sm="6" md="3">
                    <div class="my-4">
                      {{ getOutlet.location }}
                      <v-card-subtitle class="pa-0 overline"
                        >Location</v-card-subtitle
                      >
                    </div>
                  </v-col>
                  <v-col sm="6" md="3">
                    <div class="my-4">
                      GH&#8373;&nbsp;{{ getOutlet.currentCredit }}

                      <v-card-subtitle class="pa-0 overline"
                        >Credit</v-card-subtitle
                      >
                    </div>
                  </v-col>
                </v-row>
              </div>
              <v-divider class=""></v-divider>

              <div>
                <v-row align="center">
                  <!-- <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating> -->
                  <!-- <div class="grey--text ml-4">4.5 (413)</div> -->

                  <v-col sm="6" md="3">
                    <div class="my-4">
                      <v-card-text class="pa-0 mt-1 body-2 card-text">
                        {{ getOutlet.target.salesVolume }}
                      </v-card-text>
                      <v-card-subtitle class="pa-0 overline"
                        >Target Volume</v-card-subtitle
                      >
                    </div>
                  </v-col>
                  <v-col sm="6" md="3">
                    <div class="my-4">
                      <v-card-text class="pa-0 mt-1 body-2 card-text">
                        {{
                          getOutlet.actual.salesVolume
                            ? getOutlet.actual.salesVolume
                            : 0
                        }}
                      </v-card-text>
                      <v-card-subtitle class="pa-0 overline"
                        >Actual Volume</v-card-subtitle
                      >
                    </div>
                  </v-col>
                  <v-col sm="6" md="3">
                    <div class="my-4">
                      <v-card-text class="pa-0 mt-1 body-2 card-text">
                        {{ salesDeficitC }}
                      </v-card-text>
                      <v-card-subtitle class="pa-0 overline"
                        >Sales Deficit</v-card-subtitle
                      >
                    </div>
                  </v-col>
                  <v-col sm="6" md="3">
                    <div class="my-4">
                      <v-card-text class="pa-0 mt-1 body-2 card-text">
                        {{ getOutlet.actual.salesVolume }}
                      </v-card-text>
                      <v-card-subtitle class="pa-0 overline"
                        >Sales Performance</v-card-subtitle
                      >
                    </div>
                  </v-col>
                </v-row>

                <v-divider class=""></v-divider>

                <div>
                  <v-row>
                    <v-col sm="6" md="3">
                      <div class="my-4">
                        {{ getOutlet.target.numberOfVisitsForTheMonth }}
                        <v-card-subtitle class="pa-0 overline"
                          >Target Visits</v-card-subtitle
                        >
                      </div>
                    </v-col>
                    <v-col sm="6" md="3">
                      <div class="my-4">
                        {{
                          getOutlet.actual.numberOfVisitsForTheMonth
                            ? getOutlet.actual.numberOfVisitsForTheMonth
                            : 0
                        }}
                        <v-card-subtitle class="pa-0 overline"
                          >Actual Visits</v-card-subtitle
                        >
                      </div>
                    </v-col>
                    <v-col sm="6" md="3">
                      <div class="my-4">
                        {{ visitDeficitC }}
                        <v-card-subtitle class="pa-0 overline"
                          >Visit Deficit</v-card-subtitle
                        >
                      </div>
                    </v-col>
                    <v-col sm="6" md="3">
                      <div class="my-4">
                        {{ newTargetPerVisitC }}
                        <v-card-subtitle class="pa-0 overline"
                          >New Target Per Visit</v-card-subtitle
                        >
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>

              <v-divider class=""></v-divider>
            </div>
          </div>
        </v-container>
      </template>
    </salesman-layout>
  </div>
</template>

<script>
import SalesmanLayout from "~/components/SalesmanLayout";
import BackButton from "~/components/BackButton";
import OUTLET from "~/apollo/queries/getOutlet";
export default {
  name: "VisitsCustomerDetailPage",
  layout: "salesman-page",
  components: {
    SalesmanLayout,
    BackButton
  },
  data() {
    return {
      loading: 0,
      outlet_id: this.$route.params.id,
      salesDeficit: 0,
      visitsDeficit: 0,
      newTargetPerVisit: 0
    };
  },
  computed: {
    newTargetPerVisitC() {
      if (this.getOutlet) {
        const salesDeficit = this.salesDeficit;
        const visitsDeficit = this.visitsDeficit;
        const newTargetPerVisit = salesDeficit / visitsDeficit;
        this.newTargetPerVisit = newTargetPerVisit;
        return newTargetPerVisit;
      }
    },
    salesDeficitC() {
      if (this.getOutlet) {
        const targetVolume = this.getOutlet.target.salesVolume;
        const actualVolume = this.getOutlet.actual.salesVolume;
        const salesDeficit = targetVolume - actualVolume;
        this.salesDeficit = salesDeficit;
        return salesDeficit;
      }
    },
    visitDeficitC() {
      if (this.getOutlet) {
        const targetVisits = this.getOutlet.target.numberOfVisitsForTheMonth;
        const actualVisits = this.getOutlet.actual.numberOfVisitsForTheMonth
          ? this.getOutlet.actual.numberOfVisitsForTheMonth
          : 0;
        const visitsDeficit = targetVisits - actualVisits;
        this.visitsDeficit = visitsDeficit;
        return visitsDeficit;
      }
    }
  },
  apollo: {
    getOutlet: {
      query: OUTLET,
      prefetch: true,
      variables() {
        return {
          _id: this.outlet_id
        };
      }
    }
  },
  mounted() {
    console.log("this.$route.params", this.$route.params);
  }
};
</script>

<template>
  <div>
    <salesman-layout>
      <template #pageToolbars>
        <back-button class="mr-2" />
        <div class="title font-weight-black">Reports</div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn small icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <!-- <v-list-item>
              Extra Visit
            </v-list-item> -->
          </v-list>
        </v-menu>
      </template>

      <template #content>
        <div>
          <v-container>
            <v-card>
              <v-card class=" mt-4" :elevation="12"
                ><v-tabs v-model="tab" background-color="primary" centered>
                  <v-tab v-for="customer in customers" :key="customer.tab">
                    {{ customer.tab }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="customer in customers" :key="customer.tab">
                    <v-card
                      class="d-flex flex-row mt-2  "
                      color="#ffffff"
                      flat
                      tile
                    >
                      <v-card-text class=""> Criteria 15/20 </v-card-text>

                      <v-card class="bar mt-2" color="green" width="80%">
                      </v-card>
                      <v-card class="right-bar mt-2 mr-2" width="20%">
                        80%
                      </v-card>
                    </v-card>
                    <v-card class="d-flex flex-row  " color="#ffffff" flat tile>
                      <v-card-text class=""> Criteria 15/20 </v-card-text>

                      <v-card class="bar mt-2" color="#F0A51F" width="70%">
                      </v-card>
                      <v-card class="right-bar mt-2 mr-2 " width="30%">
                        70%
                      </v-card>
                    </v-card>
                    <v-card
                      class="d-flex flex-row mt-2"
                      color="#ffffff"
                      flat
                      tile
                    >
                      <v-card-text class=""> Criteria 16/20 </v-card-text>

                      <v-card class="bar mt-2" color="green" width="80%">
                      </v-card>
                      <v-card class="right-bar mt-2 mr-2" width="20%">
                        80%
                      </v-card>
                    </v-card>
                    <v-card
                      class="d-flex flex-row mt-2"
                      color="#ffffff"
                      flat
                      tile
                    >
                      <v-card-text class=""> Criteria 16/20 </v-card-text>

                      <v-card class="bar mt-2" color="green" width="80%">
                      </v-card>
                      <v-card class="right-bar mt-2 mr-2" width="20%">
                        80%
                      </v-card>
                    </v-card>
                    <v-card
                      class="d-flex flex-row mt-2"
                      color="#ffffff"
                      flat
                      tile
                    >
                      <v-card-text class=""> Criteria 16/20 </v-card-text>

                      <v-card class="bar mt-2" color="green" width="80%">
                      </v-card>
                      <v-card class="right-bar mt-2 mr-2" width="20%">
                        80%
                      </v-card>
                    </v-card>

                    <v-card
                      class="d-flex flex-row mt-2"
                      color="#ffffff"
                      flat
                      tile
                    >
                      <v-card-text class=""> Criteria 10/20 </v-card-text>

                      <v-card class="bar mt-2" color="#E02735" width="50%">
                      </v-card>
                      <v-card class="right-bar mt-2 mr-2" width="50%">
                        50%
                      </v-card>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items></v-card
              >
            </v-card>
          </v-container>
        </div>
      </template>
    </salesman-layout>
  </div>
</template>

<script>
import SalesmanLayout from "~/components/SalesmanLayout";
import BackButton from "~/components/BackButton";

export default {
  layout: "salesman-page",
  components: {
    SalesmanLayout,
    BackButton
  },
  data() {
    return {
      tab: null,
      customers: [
        { tab: "Daily ", content: "Tab 1 Content" },
        { tab: "Weekly", content: "Tab 2 Content" },
        { tab: "Monthly", content: "Tab 3 Content" }
      ]
    };
  }
};
</script>
<style scoped>
.bar {
  width: 650px;
  height: 35px;
  background-color: #f16335;
}
.right-bar {
  width: 650px;
  height: 35px;
  background-color: #ffffff;
}
.left-bar {
  width: 650px;
  height: 35px;
  background-color: #ffffff;
}
.rounded-card {
  border-radius: 25px solid red;
}
</style>

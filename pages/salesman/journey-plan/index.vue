<template>
  <div>
    <salesman-layout>
      <template #pageToolbars>
        <back-button class="mr-2" />
        <div class="title font-weight-black">Journey Plan</div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn small icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="toggleDnd">
              {{ enabled ? "Disable drag and drop" : "Enable drag and drop" }}
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <template #content>
        <div
          v-if="updated"
          class="d-flex justify-center py-2 mb-3 fixed indigo"
        >
          <v-btn @click="originalOrder" class="mr-3">Original order</v-btn>
          <v-btn color="success">Update</v-btn>
        </div>
        <v-container>
          <div><h6 v-if="loading">Loading...</h6></div>
          <v-row class="justify-center" :class="updated ? 'mt' : ''">
            <div>
              <v-dialog v-model="dialog">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on"
                    ><v-icon>mdi-calendar</v-icon
                    ><span>{{ new Date(date).toDateString() }}</span></v-btn
                  >
                </template>

                <v-date-picker v-model="date"></v-date-picker>
              </v-dialog>
            </div>
            <draggable
              v-if="getJourneyPlanForSalesman.outlets"
              :disabled="!enabled"
              :list="
                getJourneyPlanForSalesman
                  ? getJourneyPlanForSalesman.outlets
                  : []
              "
              :class="enabled ? 'customer-card' : ''"
              v-bind="dragOptions"
              @start="dragging = true"
              @end="dragEnd"
              @update="updated = true"
            >
              <transition-group
                type="transition"
                :name="!dragging ? 'flip-list' : null"
                v-if="
                  getJourneyPlanForSalesman && getJourneyPlanForSalesman.outlets
                "
              >
                <customer-card
                  class="ma-3"
                  v-for="journeyPlan in getJourneyPlanForSalesman.outlets"
                  :key="journeyPlan.outlet._id"
                >
                  <template #order>
                    <v-badge
                      class="pa-2"
                      inline
                      color="indigo lighten-2"
                      dark
                      :content="journeyPlan ? journeyPlan.order : 0"
                    >
                      <v-icon color="indigo lighten-2">mdi-map-marker</v-icon>
                    </v-badge>
                  </template>
                  <template #uniqueId>
                    {{ journeyPlan.outlet.uniqueId }}
                  </template>
                  <template #name>{{ journeyPlan.outlet.name }}</template>
                  <template #owner>
                    {{
                      journeyPlan.outlet.owner.firstName +
                        " " +
                        journeyPlan.outlet.owner.lastName
                    }}
                  </template>
                  <template #contact>{{
                    journeyPlan.outlet.outletContact.telephone
                  }}</template>
                </customer-card>
              </transition-group>
            </draggable>
            <v-container class="d-flex justify-center grey--text" v-else
              >No journey plan availble for selected date</v-container
            >
          </v-row>
        </v-container>
      </template>
    </salesman-layout>
  </div>
</template>

<script>
import CustomerCard from "~/components/CustomerCard";
import BackButton from "~/components/BackButton";
import SalesmanLayout from "~/components/SalesmanLayout";
import draggable from "vuedraggable";
import journeyPlanForSalesman from "~/apollo/queries/getJourneyPlanForSalesman";
export default {
  name: "JourneyPlanPage",
  layout: "salesman-page",
  components: {
    CustomerCard,
    BackButton,
    SalesmanLayout,
    draggable
  },
  data() {
    return {
      salesman_id: "5e5d2456eb91d649fff197cb",
      date: new Date().toISOString().substr(0, 10),
      enabled: false,
      dragging: false,
      updated: false,
      getJourneyPlanForSalesman: {},
      loading: 0,
      originalList: [],
      updatedList: [],
      dialog: false
    };
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
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
        dragClass: "drag",
        dragoverBubble: true
      };
    },
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },

  methods: {
    toggleDnd() {
      this.enabled = !this.enabled;
    },
    add: function() {
      this.list.push({});
    },
    replace: function() {
      this.list = [{}];
    },
    dragEnd: function(e) {
      this.dragging = false;
      console.log("original list", this.originalList);

      const { outlets } = this.getJourneyPlanForSalesman;

      console.log("updated list", outlets);

      console.log(this.picker);
    },
    originalOrder() {
      let { outlets } = this.getJourneyPlanForSalesman;
      outlets = outlets.sort((a, b) => a.order - b.order);
    }
  },
  mounted() {
    const { outlets } = this.getJourneyPlanForSalesman;
    const original = [...outlets];
    this.originalList = [...original];
  }
};
</script>

<style scoped>
.customer-card {
  cursor: move;
}
.ghost {
  opacity: 0.5;
}
.drag {
  border: 1px solid rgb(63, 81, 181);
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 2;
}
.mt {
  margin-top: 3em;
}
</style>

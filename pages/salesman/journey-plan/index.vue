<template>
  <div>
    <salesman-layout>
      <template #content>
        <v-container>
          <v-row class="justify-center">
            <draggable
              :disabled="!enabled"
              :list="getTodaysJourneyPlanForSalesman ? getTodaysJourneyPlanForSalesman.outlets : []"
              class="customer-card"
              ghost-class="ghost"
              :move="checkMove"
              v-bind="dragOptions"
              @start="dragging = true"
              @end="dragging = false"
            >
              <transition-group
                type="transition"
                :name="!dragging ? 'flip-list' : null"
                v-if="getTodaysJourneyPlanForSalesman && getTodaysJourneyPlanForSalesman.outlets"
              >
                <customer-card
                  class="customer-card ma-3"
                  v-for="journeyPlan in getTodaysJourneyPlanForSalesman.outlets"
                  :key="journeyPlan.outlet._id"
                >
                  <template #order>
                    <v-badge
                      class="pa-2"
                      inline
                      color="indigo lighten-2"
                      dark
                      :content="journeyPlan ? journeyPlan.order: 0"
                    >
                      <v-icon color="indigo lighten-2">mdi-map-marker</v-icon>
                    </v-badge>
                  </template>
                  <template #uniqueId>{{ journeyPlan.outlet.uniqueId }}</template>
                  <template #name>{{ journeyPlan.outlet.name }}</template>
                  <template
                    #owner
                  >{{ journeyPlan.outlet.owner.firstName + " " + journeyPlan.outlet.owner.lastName }}</template>
                  <template #contact>
                    {{
                    journeyPlan.outlet.outletContact.telephone
                    }}
                  </template>
                </customer-card>
              </transition-group>
            </draggable>
          </v-row>
        </v-container>
      </template>
    </salesman-layout>
  </div>
</template>

<script>
import CustomerCard from "~/components/CustomerCard";
import SalesmanLayout from "~/components/SalesmanLayout";
import draggable from "vuedraggable";
import todaysJourneyPlanForSalesman from "~/apollo/queries/getTodaysJourneyPlanForSalesman";
export default {
  name: "JourneyPlanPage",
  layout: "plain",
  components: {
    CustomerCard,
    SalesmanLayout,
    draggable
  },
  apollo: {
    getTodaysJourneyPlanForSalesman: {
      query: todaysJourneyPlanForSalesman,
      prefetch: true
    }
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "John asddfasdfsdfsd", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Adortsu", id: 2 },
        { name: "Cine", id: 3 },
        { name: "Megan", id: 4 },
        { name: "Etor", id: 5 },
        { name: "Chekap", id: 6 },
        { name: "Milan", id: 7 }
      ],
      dragging: false
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    draggingInfo() {
      return this.dragging ? "under drag" : "";
    }
  },

  methods: {
    add: function() {
      this.list.push({});
    },
    replace: function() {
      this.list = [{}];
    },
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    }
  }
};
</script>

<style scoped>
.customer-card {
  cursor: move;
}
.ghost {
  opacity: 0.5;
  /* background: #c8ebfb; */
  background-color: red;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}

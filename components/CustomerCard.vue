<template>
  <v-card class="pa-0" max-width="">
    <v-list-item class="pa-1" three-line>
      <v-list-item-avatar tile size="40" color="">
        <v-avatar class="mr-0" size="30" color="indigo">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-content class="pa-1">
        <div class="overline mb-1">ID:<slot name="uniqueId"></slot></div>
        <v-list-item-title
          class="mb-1 font-weight-bold  grey--text text--darken-2"
          ><slot name="name"></slot>
        </v-list-item-title>
        <v-row>
          <v-col md="6" xs="12" sm="12">
            <v-card-text class="pa-0 mt-1 body-2 card-text"
              ><slot name="owner"></slot
            ></v-card-text>
            <v-card-subtitle class="pa-0 overline">Owner</v-card-subtitle>
          </v-col>
          <v-col md="6" xs="12" sm="12">
            <v-card-text class="pa-0 mt-1 body-2 card-text"
              ><slot name="contact"></slot
            ></v-card-text>
            <v-card-subtitle class="pa-0 overline">Contact</v-card-subtitle>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CustomerCard"
};
</script>

<style scoped>
.card-text {
  font-size: 0.775rem !important;
}
</style>

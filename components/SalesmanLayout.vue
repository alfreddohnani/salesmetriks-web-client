<template>
  <div>
    <v-app-bar
      app
      color="indigo"
      dark
      elevate-on-scroll
      :prominent="prominentBar"
    >
      <slot name="pageToolbars"></slot><br />
      <template v-if="extensionSlot == true" v-slot:extension>
        <slot name="extension-slot"></slot>
      </template>
    </v-app-bar>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "SalesmanLayout",
  props: {
    source: String,
    prominentBar: Boolean,
    extensionSlot: Boolean
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style></style>

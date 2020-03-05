<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      elevate-on-scroll
      :prominent="prominentBar"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <slot name="pageToolbars"></slot><br />
      <template v-slot:extension>
        <slot name="extension-slot"></slot>
      </template>
    </v-app-bar>

    <slot name="content"></slot>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "SalesmanLayout",
  props: {
    source: String,
    prominentBar: Boolean
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style></style>

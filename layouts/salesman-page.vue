<template>
  <v-app id="inspire">
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "SalesmanPagesLayout",
  data() {
    return {
      loading: true
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: #ccc;
}
</style>

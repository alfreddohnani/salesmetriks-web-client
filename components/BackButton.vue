<template>
  <div class="pa-3" @click="goBack">
    <v-icon>mdi-arrow-left</v-icon>
  </div>
</template>


<script>
export default {
  name: "BackButton",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

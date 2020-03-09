<template>
  <div>
    <v-snackbar top color="success" v-model="mutableSuccessSnackbar">
      {{ mutableSuccessMessage }}
      <v-btn color="pink" text @click="mutableSuccessSnackbar = false">
        Close
      </v-btn>
    </v-snackbar>

    <v-snackbar color="error" v-model="mutableErrorSnackbar">
      {{ mutableErrorMessage }}
      <v-btn color="pink" text @click="mutableErrorSnackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "MySnackbar",
  props: {},
  data() {
    return {
      mutableSuccessSnackbar: this.successSnackbar,
      mutableErrorSnackbar: this.errorSnackbar,
      mutableSuccessMessage: this.successMessage,
      mutableErrorMessage: this.errorMessage
    };
  }
};
</script>

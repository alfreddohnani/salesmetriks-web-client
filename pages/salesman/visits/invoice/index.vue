<template>
  <div>
    <v-btn @click.stop="dialog = true" color="blue darken-1" class="bottom"
      >Print</v-btn
    >
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline"> Are you sure ?</v-card-title>

        <v-card-actions>
          <v-btn color="green darken-1" text @click="dialog = false">
            Yes
          </v-btn>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  layout: "salesman",
  data() {
    return {
      dialog: false
    };
  }
};
</script>
<style scoped>
.bottom {
  position: absolute;
  bottom: 5px;
  left: 150px;
}
</style>

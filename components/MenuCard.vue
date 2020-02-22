<template>
  <div>
    <v-card :to="$props.link" class="d-flex justify-center align-center" outlined height="150px">
      <div class="pa-5">
        <v-row justify="center" align="center">
          <v-icon large>
            <slot name="icon"></slot>
          </v-icon>
        </v-row>
        <v-row justify="center" class="text-center text-color">
          <slot name="title"></slot>
        </v-row>
      </div>
    </v-card>
  </div>
</template>


<script>
export default {
  props: ["link"]
};
</script>

<style scoped>
.text-color {
  color: #ccc;
}
</style>



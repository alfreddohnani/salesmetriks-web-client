<template>
  <div>
    <v-card class="mx-auto mb-2" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">#CUSTOMER-NO</div>
            <v-list-item-title class="mb-1">SHOP NAME</v-list-item-title>
            <v-list-item-subtitle>Customer Name</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="40" ><v-icon>mdi-account</v-icon></v-list-item-avatar>
        </v-list-item>

        <slot></slot>
      </v-card>
  </div>
</template>

<script>
export default {

}
</script>

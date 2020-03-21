<template>
  <div>
    <v-container>
      <div class="background">
        <v-card class="mx-auto" color="#367100" dark max-width="400">
          <v-card-text class="headline font-weight-bold">
            Your account registration was successful! An email has been sent to
            you with your activation link. To proceed, click the activation link
            to activate your account. Then
            <v-btn :to="{ name: 'login' }">Login</v-btn>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "RegistrationSuccesPage",
  layout: "landing-pages"
};
</script>

<style scoped>
.background {
  background-image: url("/undraw_welcome_cats_thqn.svg");
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>

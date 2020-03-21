<template>
  <div class="background">
    <v-row align="center" justify="center">
      <v-col sm="6">
        <v-stepper v-model="step" alt-labels>
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1"
              >Company</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="step > 2" step="2"
              >Administrator</v-stepper-step
            >
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <ValidationObserver
                ref="companyObserver"
                v-slot="{ validate, reset }"
              >
                <form>
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="company.name"
                      :error-messages="errors"
                      label="Name of company"
                      required
                    ></v-text-field>
                  </ValidationProvider>
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="company.email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Telephone"
                    rules="required"
                  >
                    <v-text-field
                      v-model="company.telephone"
                      :error-messages="errors"
                      label="Telephone"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <v-btn block x-large color="primary" @click="next"
                    >Next <v-icon>mdi-chevron-right</v-icon></v-btn
                  >
                </form>
              </ValidationObserver>
            </v-stepper-content>

            <v-stepper-content step="2">
              <div>
                <v-snackbar
                  vertical
                  top
                  :color="snackbarColor"
                  v-model="snackbar"
                >
                  {{ snackbarMessage }}
                  <v-btn dark text @click="snackbar = false">
                    Close
                  </v-btn>
                </v-snackbar>
              </div>
              <v-btn icon outlined color="primary" @click="step = 1">
                <v-icon>mdi-chevron-left</v-icon></v-btn
              >

              <ValidationObserver
                ref="adminObserver"
                v-slot="{ validate, reset }"
              >
                <form>
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="First name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="admin.firstName"
                      :error-messages="errors"
                      label="First name"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Last name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="admin.lastName"
                      :error-messages="errors"
                      label="Last name"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="admin.email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Telephone"
                    rules="required"
                  >
                    <v-text-field
                      v-model="admin.telephone"
                      :error-messages="errors"
                      label="Telephone"
                      type="number"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required|min:6"
                  >
                    <v-text-field
                      v-model="admin.password"
                      :error-messages="errors"
                      label="Password"
                      type="password"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Confirm password"
                    :rules="`required|passwordMatch:${admin.password}`"
                  >
                    <v-text-field
                      v-model="admin.confirmPassword"
                      :error-messages="errors"
                      label="Confirm password"
                      type="password"
                      required
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="checkbox"
                  >
                    <v-checkbox
                      v-model="checkbox"
                      :error-messages="errors"
                      value="1"
                      label="Agree to terms and conditions"
                      type="checkbox"
                      required
                    ></v-checkbox>
                  </ValidationProvider>

                  <v-btn
                    :loading="btnLoading"
                    x-large
                    block=""
                    color="primary"
                    @click="submit"
                    >Create new account</v-btn
                  >
                </form>
              </ValidationObserver>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CREATE_COMPANY from "~/apollo/mutations/createCompany";

import { required, email, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from "vee-validate";

setInteractionMode("eager");

extend("passwordMatch", {
  validate(value, { password }) {
    return value === password;
  },
  params: ["password"],
  message: "{_field_} must be equal to password"
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty"
});

extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters"
});

extend("email", {
  ...email,
  message: "Email must be valid"
});

export default {
  name: "RequestDemoPage",
  layout: "",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      snackbar: false,
      snackbarColor: "",
      snackbarMessage: "",
      btnLoading: false,
      company: {
        name: null,
        email: null,
        telephone: null
      },
      admin: {
        firstName: null,
        lastName: null,
        email: null,
        telephone: null,
        password: null,
        confirmPassword: null
      },
      step: 1,
      name: "",
      email: "",
      checkbox: null
    };
  },

  methods: {
    snackbarAlert(msg, color) {
      this.snackbarMessage = msg;
      this.color = color;
      this.snackbar = true;
    },
    async submit() {
      const validated = await this.$refs.adminObserver.validate();
      if (validated) {
        if (this.admin.password === this.admin.confirmPassword) {
          this.btnLoading = true;

          try {
            const result = await this.$apollo.mutate({
              mutation: CREATE_COMPANY,
              variables: {
                companyInput: {
                  name: this.company.name,
                  email: this.company.email,
                  contact: {
                    email: this.company.email,
                    telephone: this.company.telephone
                  }
                },
                salesAdminInput: {
                  firstName: this.admin.firstName,
                  lastName: this.admin.lastName,
                  avatar: "",
                  email: this.admin.email,
                  password: this.admin.password,
                  contact: {
                    email: this.admin.email,
                    telephone: this.admin.telephone
                  }
                }
              }
            });

            if (result.data.createCompany.name !== null) {
              this.btnLoading = false;
              this.$router.push({ name: "registration-success" });
            }
          } catch (error) {
            this.btnLoading = false;
            this.snackbarAlert(
              error.toString().split("Error: GraphQL error:")[1],
              "error"
            );
          }
        }
      }
    },
    async next() {
      const validated = await this.$refs.companyObserver.validate();
      if (validated) {
        this.step = 2;
      }
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("/undraw_access_account_99n5.svg");
  background-size: cover;
  background-position: center;
}
</style>

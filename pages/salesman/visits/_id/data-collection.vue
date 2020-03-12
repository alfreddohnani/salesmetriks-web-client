<template>
  <div>
    <div>
      <v-snackbar vertical top :color="snackbarColor" v-model="snackbar">
        {{ snackbarMessage }}
        <v-btn dark text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </div>

    <salesman-layout>
      <template #pageToolbars>
        <back-button class="mr-2" />
        <div class="title font-weight-black">Visit - Data Collection</div>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn small icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <!-- <v-list-item>
              Extra Visit
            </v-list-item> -->
          </v-list>
        </v-menu>
      </template>

      <template #content>
        <div>
          <v-container>
            <div>
              <v-stepper v-model="e6" vertical>
                <v-stepper-step :complete="e6 > 1" step="1">
                  Price Check
                  <small>Enter unit selling price per brand</small>
                </v-stepper-step>

                <v-stepper-content step="1">
                  <div class="my-12">
                    <v-bottom-sheet v-model="sheet.priceCheck">
                      <template v-slot:activator="{ on }">
                        <div class="text-center">
                          <v-btn small color="primary" dark v-on="on">
                            Select Brand
                          </v-btn>
                        </div>
                        <v-divider class="my-3"></v-divider>
                      </template>
                      <v-sheet class="text-center" height="400px">
                        <v-btn
                          class="mt-3"
                          icon
                          small
                          outlined
                          color="error"
                          @click="sheet.priceCheck = !sheet.priceCheck"
                          ><v-icon>mdi-close</v-icon></v-btn
                        >
                        <div>
                          <v-row justify="center" class="px-6">
                            <v-col cols="12" xs="6" sm="6" md="3" lg="3">
                              <div>
                                <v-overflow-btn
                                  @change="selectBrand"
                                  v-model="selectedBrand"
                                  text
                                  v-if="getAllBrands"
                                  :items="getAllBrands"
                                  label="Choose Brand"
                                  editable
                                  item-text="name"
                                  item-value="_id"
                                  return-object
                                  clearable
                                  hide-selected
                                  open-on-clear
                                  :loading="$apollo.loading ? true : false"
                                ></v-overflow-btn>
                              </div>

                              <div>
                                <div v-if="recPriceRange.start" class="pa-1">
                                  <v-btn color="grey" small outlined
                                    >GH₵
                                    {{ recPriceRange.start || "start" }}</v-btn
                                  >
                                  <v-btn color="grey" icon small outlined
                                    ><v-icon>mdi-arrow-right</v-icon></v-btn
                                  >
                                  <v-btn color="grey" small outlined
                                    >GH₵ {{ recPriceRange.end || "end" }}</v-btn
                                  >

                                  <div class="pa-0 overline grey--text">
                                    Recommended Price Range
                                  </div>
                                </div>
                              </div>

                              <div>
                                <v-text-field
                                  ref="currentUnitPrice"
                                  :rules="[
                                    () =>
                                      !!currentUnitPrice ||
                                      'This field is required'
                                  ]"
                                  v-model="currentUnitPrice"
                                  prefix="GH₵"
                                  type="number"
                                  label="Current Unit Price"
                                  outlined
                                  clearable
                                ></v-text-field>
                              </div>

                              <div>
                                <v-btn
                                  @click="addToPricesCheckedList()"
                                  color="primary"
                                  >Add</v-btn
                                >
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </v-sheet>
                    </v-bottom-sheet>

                    <div>
                      <div
                        v-if="
                          pricesCheckedList && pricesCheckedList.length !== 0
                        "
                      >
                        <v-card
                          v-for="item in pricesCheckedList"
                          :key="item.brand._id"
                          class="mx-auto pa-0"
                          max-width="344"
                        >
                          <v-card-text
                            class="d-flex justify-space-between my-2"
                          >
                            <div class="text--primary">
                              {{ item.brand.name }}
                              <v-card-subtitle class="pa-0 overline"
                                >Brand</v-card-subtitle
                              >
                            </div>

                            <div class="text--primary">
                              GH₵ {{ new Number(item.price).toLocaleString() }}
                              <v-card-subtitle class="pa-0 overline"
                                >Price</v-card-subtitle
                              >
                            </div>
                          </v-card-text>
                        </v-card>
                      </div>

                      <div v-else class="text-center">
                        <small> None added</small>
                      </div>
                    </div>
                  </div>
                  <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2"
                  >Stock Check
                  <small>Enter available stock per brand</small></v-stepper-step
                >

                <v-stepper-content step="2">
                  <div class="my-12">
                    <v-bottom-sheet v-model="sheet.stockCheck">
                      <template v-slot:activator="{ on }">
                        <div class="text-center">
                          <v-btn small color="primary" dark v-on="on">
                            Add Stock
                          </v-btn>
                        </div>
                        <v-divider class="my-3"></v-divider>
                      </template>
                      <v-sheet class="text-center" height="400px">
                        <v-btn
                          class="mt-3"
                          icon
                          small
                          outlined
                          color="error"
                          @click="sheet.stockCheck = !sheet.stockCheck"
                          ><v-icon>mdi-close</v-icon></v-btn
                        >
                        <div>
                          <v-row justify="center" class="px-6">
                            <v-col cols="12" xs="6" sm="6" md="3" lg="3">
                              <div>
                                <v-overflow-btn
                                  @change="selectBrand"
                                  v-model="selectedBrand"
                                  text
                                  v-if="getAllBrands"
                                  :items="getAllBrands"
                                  label="Choose Brand"
                                  editable
                                  item-text="name"
                                  item-value="_id"
                                  return-object
                                  clearable
                                  hide-selected
                                  open-on-clear
                                  :loading="$apollo.loading ? true : false"
                                ></v-overflow-btn>
                              </div>

                              <div>
                                <v-text-field
                                  ref="stockCheck.pack"
                                  v-model="stockCheck.pack"
                                  type="number"
                                  label="Pack"
                                  outlined
                                  clearable
                                ></v-text-field>
                              </div>

                              <div>
                                <v-text-field
                                  ref="stockCheck.unit"
                                  v-model="stockCheck.unit"
                                  type="number"
                                  label="Unit"
                                  outlined
                                  clearable
                                ></v-text-field>
                              </div>

                              <div>
                                <v-btn
                                  @click="addToStockCheckedList()"
                                  color="primary"
                                  >Add</v-btn
                                >
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </v-sheet>
                    </v-bottom-sheet>

                    <div>
                      <div
                        v-if="
                          stockCheck.stockCheckedList &&
                            stockCheck.stockCheckedList.length !== 0
                        "
                      >
                        <v-card
                          v-for="item in stockCheck.stockCheckedList"
                          :key="item.brand._id"
                          class="mx-auto pa-0"
                          max-width="344"
                        >
                          <v-card-text
                            class="d-flex justify-space-between my-2"
                          >
                            <div class="text--primary">
                              {{ item.brand.name }}
                              <v-card-subtitle class="pa-0 overline"
                                >Brand</v-card-subtitle
                              >
                            </div>

                            <div class="text--primary">
                              {{ new Number(item.pack).toLocaleString() }}
                              <v-card-subtitle class="pa-0 overline"
                                >Pack</v-card-subtitle
                              >
                            </div>

                            <div class="text--primary">
                              {{ new Number(item.unit).toLocaleString() }}
                              <v-card-subtitle class="pa-0 overline"
                                >Unit</v-card-subtitle
                              >
                            </div>
                          </v-card-text>
                        </v-card>
                      </div>

                      <div v-else class="text-center">
                        <small> None added</small>
                      </div>
                    </div>
                  </div>
                  <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                  <v-btn @click="e6 = 1" icon outlined color="primary">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3"
                  >Sales order
                  <small>Today's sales order</small></v-stepper-step
                >

                <v-stepper-content step="3">
                  <div class="my-12">
                    <v-bottom-sheet v-model="sheet.salesOrder">
                      <template v-slot:activator="{ on }">
                        <div class="text-center">
                          <v-btn small color="primary" dark v-on="on">
                            Add Item
                          </v-btn>
                        </div>
                        <v-divider class="my-3"></v-divider>
                      </template>
                      <v-sheet class="text-center" height="450px">
                        <v-btn
                          class="mt-3"
                          icon
                          small
                          outlined
                          color="error"
                          @click="sheet.salesOrder = !sheet.salesOrder"
                          ><v-icon>mdi-close</v-icon></v-btn
                        >
                        <div class="">
                          <v-row class="px-6" justify="center">
                            <v-col cols="12" xs="6" sm="6" md="3" lg="3">
                              <div>
                                <v-overflow-btn
                                  @change="selectBrand"
                                  v-model="selectedBrand"
                                  text
                                  v-if="getAllBrands"
                                  :items="getAllBrands"
                                  label="Choose Brand"
                                  editable
                                  item-text="name"
                                  item-value="_id"
                                  return-object
                                  clearable
                                  hide-selected
                                  open-on-clear
                                  :loading="$apollo.loading ? true : false"
                                ></v-overflow-btn>
                              </div>

                              <div>
                                <v-text-field
                                  ref="salesOrder.pack"
                                  v-model="salesOrder.pack"
                                  type="number"
                                  label="Pack"
                                  outlined
                                  clearable
                                ></v-text-field>
                              </div>

                              <div>
                                <v-text-field
                                  ref="salesOrder.unit"
                                  v-model="salesOrder.unit"
                                  type="number"
                                  label="Unit"
                                  outlined
                                  clearable
                                ></v-text-field>
                              </div>

                              <div>
                                <v-text-field
                                  ref="salesOrder.unitPrice"
                                  prefix="GH₵"
                                  v-model="salesOrder.unitPrice"
                                  type="number"
                                  label="Unit Price"
                                  outlined
                                  disabled
                                ></v-text-field>
                              </div>

                              <div>
                                <v-btn
                                  @click="addToSalesOrderList()"
                                  color="primary"
                                  >Add</v-btn
                                >
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </v-sheet>
                    </v-bottom-sheet>

                    <div>
                      <div
                        v-if="
                          salesOrder.salesOrderList &&
                            salesOrder.salesOrderList.length !== 0
                        "
                      >
                        <v-card
                          v-for="item in salesOrder.salesOrderList"
                          :key="item.brand._id"
                          class="mx-auto pa-0"
                          max-width="700"
                        >
                          <v-card-text
                            class="d-flex justify-space-between my-2"
                          >
                            <div class="text--primary">
                              {{ item.brand.name }}
                              <v-card-subtitle class="pa-0 overline"
                                >Brand</v-card-subtitle
                              >
                            </div>

                            <div class="text--primary">
                              {{ new Number(item.pack).toLocaleString() }}
                              <v-card-subtitle class="pa-0 overline"
                                >Pack</v-card-subtitle
                              >
                            </div>
                            <div class="text--primary">
                              {{ new Number(item.unit).toLocaleString() }}
                              <v-card-subtitle class="pa-0 overline"
                                >Unit</v-card-subtitle
                              >
                            </div>

                            <div class="text--primary">
                              GH₵
                              {{ new Number(item.unitPrice).toLocaleString() }}
                              <v-card-subtitle class="pa-0 overline"
                                >Unit Price</v-card-subtitle
                              >
                            </div>

                            <div class="text--primary">
                              GH₵
                              {{ new Number(item.subTotal).toLocaleString() }}
                              <v-card-subtitle class="pa-0 overline"
                                >subTotal</v-card-subtitle
                              >
                            </div>
                          </v-card-text>
                        </v-card>
                      </div>

                      <div v-else class="text-center">
                        <small> No orders added</small>
                      </div>
                    </div>
                  </div>
                  <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                  <v-btn @click="e6 = 2" icon outlined color="primary">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 4" step="4"
                  >Summary
                  <small>Summary of today's sales order</small></v-stepper-step
                >
                <v-stepper-content step="4">
                  <div>
                    <v-row justify="center" class="pa-md-6">
                      <v-col sm-8>
                        <v-simple-table dense>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Brand</th>
                                <th class="text-left">Pack</th>
                                <th class="text-left">Unit</th>
                                <th class="text-left">Unit Price</th>
                                <th class="text-left">Sub Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="item in salesOrder.salesOrderList"
                                :key="item.name"
                              >
                                <td>{{ item.brand.name }}</td>
                                <td>
                                  {{ new Number(item.pack).toLocaleString() }}
                                </td>
                                <td>
                                  {{ new Number(item.unit).toLocaleString() }}
                                </td>
                                <td>
                                  {{
                                    new Number(item.unitPrice).toLocaleString()
                                  }}
                                </td>
                                <td>
                                  {{
                                    new Number(item.subTotal).toLocaleString()
                                  }}
                                </td>
                              </tr>
                              <tr>
                                <td>Total Sales</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>value</td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-col>
                    </v-row>
                  </div>
                  <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
                  <v-btn @click="e6 = 3" icon outlined color="primary">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 5" step="5"
                  >Payment <small>Mode of payment</small></v-stepper-step
                >
                <v-stepper-content step="5">
                  <v-card
                    color="grey lighten-1"
                    class="mb-12"
                    height="200px"
                  ></v-card>
                  <v-btn color="primary" @click="e6 = 6">Continue</v-btn>
                  <v-btn @click="e6 = 4" icon outlined color="primary">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>

                <v-stepper-step step="6"
                  >Invoice <small>Print invoice</small></v-stepper-step
                >
                <v-stepper-content step="6">
                  <v-card
                    color="grey lighten-1"
                    class="mb-12"
                    height="200px"
                  ></v-card>
                  <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
                  <v-btn @click="e6 = 5" icon outlined color="primary">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                </v-stepper-content>
              </v-stepper>
            </div>
          </v-container>
        </div>
      </template>
    </salesman-layout>
  </div>
</template>

<script>
import SalesmanLayout from "~/components/SalesmanLayout";
import BackButton from "~/components/BackButton";
import ALL_BRANDS from "~/apollo/queries/getAllBrands";

export default {
  name: "VisitsDataCollectionPage",
  layout: "salesman-page",
  components: {
    SalesmanLayout,
    BackButton
  },
  data() {
    return {
      snackbar: false,
      snackbarColor: "",
      snackbarMessage: "",
      sheet: {
        priceCheck: false,
        stockCheck: false,
        salesOrder: false,
        summary: false,
        payment: false,
        invoice: false
      },
      e6: 1,
      getAllBrands: [],
      selectedBrand: "",
      recPriceRange: {},
      currentUnitPrice: null,
      pricesCheckedList: [],
      stockCheck: {
        pack: "",
        unit: "",
        stockCheckedList: []
      },
      salesOrder: {
        pack: "",
        unit: "",
        unitPrice: "",
        subTotal: "",
        salesOrderList: []
      },
      summary: {},
      payment: {},
      invoice: {}
    };
  },
  computed: {
    func(item) {
      console.log(item.name);
      return item;
    }
  },
  apollo: {
    getAllBrands: {
      query: ALL_BRANDS,
      prefetch: true
    }
  },
  methods: {
    snackbarAlert(msg, color) {
      this.snackbarMessage = msg;
      this.color = color;
      this.snackbar = true;
    },
    addToSalesOrderList() {
      if (
        this.selectedBrand.name &&
        (this.salesOrder.pack || this.salesOrder.unit) &&
        this.salesOrder.unitPrice
      ) {
        if (
          this.salesOrder.salesOrderList.filter(
            e => e.brand.name === this.selectedBrand.name
          ).length > 0
        ) {
          this.snackbarAlert(
            `${this.selectedBrand.name} has already been added`,
            "error"
          );
        } else {
          let subTotal = null;
          if (Number(this.salesOrder.pack) === 0) {
            subTotal = this.salesOrder.unit * this.salesOrder.unitPrice;
          } else if (Number(this.salesOrder.unit) === 0) {
            this.snackbarAlert(
              "Enter the number of units in one pack!",
              "error"
            );
            return;
          } else {
            subTotal =
              this.salesOrder.pack *
              this.salesOrder.unit *
              this.salesOrder.unitPrice;
          }

          this.salesOrder.salesOrderList.unshift({
            brand: this.selectedBrand,
            pack: this.salesOrder.pack,
            unit: this.salesOrder.unit,
            unitPrice: this.salesOrder.unitPrice,
            subTotal
          });

          console.log(
            "---sales order list----",
            this.salesOrder.salesOrderList
          );

          this.selectedBrand = "";
          this.salesOrder.pack = "";
          this.salesOrder.unit = "";
        }

        this.sheet.salesOrder = !this.sheet.salesOrder;
        console.log(
          "-----selected brand name----",
          this.selectedBrand.name,
          "----pack-----",
          this.salesOrder.pack,
          "----unit",
          this.salesOrder.unit
        );
      } else {
        if (!this.selectedBrand.name) {
          this.snackbarAlert("Select a brand!", "error");
        } else if (!(this.salesOrder.pack || this.salesOrder.unit)) {
          this.snackbarAlert("Both pack and unit cannot be empty", "error");
        }
      }
    },
    addToStockCheckedList() {
      if (
        this.selectedBrand.name &&
        this.stockCheck.pack &&
        this.stockCheck.unit
      ) {
        if (
          this.stockCheck.stockCheckedList.filter(
            e => e.brand.name === this.selectedBrand.name
          ).length > 0
        ) {
          this.snackbarAlert(
            `${this.selectedBrand.name} has already been added`,
            "error"
          );
        } else {
          this.stockCheck.stockCheckedList.unshift({
            brand: this.selectedBrand,
            pack: this.stockCheck.pack,
            unit: this.stockCheck.unit
          });

          console.log(
            "---stock checked list",
            this.stockCheck.stockCheckedList
          );

          this.selectedBrand = "";
          this.stockCheck.pack = "";
          this.stockCheck.unit = "";
        }

        this.sheet.stockCheck = !this.sheet.stockCheck;
        console.log(
          "-----selected brand name----",
          this.selectedBrand.name,
          "----pack-----",
          this.stockCheck.pack,
          "----unit",
          this.stockCheck.unit
        );
      } else {
        if (!this.selectedBrand.name) {
          this.snackbarAlert("Select a brand!", "error");
        } else if (!this.stockCheck.pack) {
          this.snackbarAlert("Enter the number of packs!", "error");
        } else if (!this.stockCheck.unit) {
          this.snackbarAlert("Enter the number of units!", "error");
        }
      }
    },
    addToPricesCheckedList() {
      if (this.selectedBrand.name && this.currentUnitPrice) {
        if (
          this.pricesCheckedList.filter(
            e => e.brand.name === this.selectedBrand.name
          ).length > 0
        ) {
          /* this.pricesCheckedList contains the element we're looking for */
          this.snackbarAlert(
            `${this.selectedBrand.name} has already been added`,
            "error"
          );
        } else {
          this.pricesCheckedList.unshift({
            brand: this.selectedBrand,
            price: this.currentUnitPrice
          });

          this.currentUnitPrice = "";
          this.selectedBrand = "";
          this.recPriceRange.start = "";
        }

        this.sheet.priceCheck = !this.sheet.priceCheck;
        console.log(
          "-----selected brand name----",
          this.selectedBrand.name,
          "----currentUnitPrice-----",
          this.currentUnitPrice,
          "----prices checked list",
          this.pricesCheckedList
        );
      } else {
        if (!this.selectedBrand.name) {
          this.snackbarAlert("Select a brand!", "error");
        } else if (!this.selectedBrand.currentUnitPrice) {
          this.snackbarAlert("Enter the current unit price!", "error");
        }
      }
    },

    selectBrand(e) {
      // Perform if check to avoid e is undefined error when the
      // overflow button is cleared
      if (e) {
        this.recPriceRange.start =
          e.recommendedOutletSellingPriceRangePerUnit.start;

        this.recPriceRange.end =
          e.recommendedOutletSellingPriceRangePerUnit.end;

        this.salesOrder.unitPrice = e.salesmanSellingPricePerUnit;

        console.log("-----select brand working-----", this.selectedBrand);
      } else {
        this.selectedBrand = {};
        this.recPriceRange = {};
        console.log("-----select brand working-----", this.selectedBrand);
      }
    }
  }
};
</script>

<template>
  <div>
    <v-overlay :value="overlay">
      <v-card style="border-radius:20px" light outline>
        <div>
          <v-chip
            class="ma-2"
            :color="uploadProgress === '100%' ? 'green' : 'teal'"
            text-color="white"
          >
            <v-avatar left>
              <v-icon>
                {{
                  uploadProgress === "100%"
                    ? "mdi-checkbox-marked-circle"
                    : "mdi-cloud-upload"
                }}</v-icon
              >
            </v-avatar>
            {{
              uploadProgress === "100%"
                ? "done"
                : "uploading invoice to the cloud"
            }}
          </v-chip>
        </div>
        <div class="d-flex justify-center">
          <v-progress-circular
            :rotate="-90"
            :size="100"
            :width="15"
            :value="uploadProgress"
            color="teal"
          >
            {{ uploadProgress }}
          </v-progress-circular>
        </div>
      </v-card>
    </v-overlay>

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
              <v-stepper v-model="e6">
                <v-stepper-header>
                  <v-stepper-step :complete="e6 > 1" step="1">
                    Price Check
                    <!-- <small>Enter unit selling price per brand</small> -->
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e6 > 2" step="2"
                    >Stock Check
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e6 > 3" step="3"
                    >Sales order
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e6 > 4" step="4"
                    >Summary
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step :complete="e6 > 5" step="5"
                    >Payment
                  </v-stepper-step>

                  <v-divider></v-divider>

                  <v-stepper-step step="6">Invoice </v-stepper-step>
                </v-stepper-header>

                <v-stepper-items>
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
                                      {{
                                        recPriceRange.start || "start"
                                      }}</v-btn
                                    >
                                    <v-btn color="grey" icon small outlined
                                      ><v-icon>mdi-arrow-right</v-icon></v-btn
                                    >
                                    <v-btn color="grey" small outlined
                                      >GH₵
                                      {{ recPriceRange.end || "end" }}</v-btn
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
                                {{ item.brand }}
                                <v-card-subtitle class="pa-0 overline"
                                  >Brand</v-card-subtitle
                                >
                              </div>

                              <div class="text--primary">
                                GH₵
                                {{
                                  new Number(
                                    item.sellingPricePerUnit
                                  ).toLocaleString()
                                }}
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
                                {{ item.brand }}
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
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  </v-stepper-content>

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
                                    ref="salesOrder.price"
                                    prefix="GH₵"
                                    v-model="salesOrder.price"
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
                                {{ item.brand }}
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
                                {{ new Number(item.price).toLocaleString() }}
                                <v-card-subtitle class="pa-0 overline"
                                  >Unit Price</v-card-subtitle
                                >
                              </div>

                              <div class="text--primary">
                                GH₵
                                {{ new Number(item.subTotal).toLocaleString() }}
                                <v-card-subtitle class="pa-0 overline"
                                  >subtotal</v-card-subtitle
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
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="4">
                    <div>
                      <v-row justify="center" class="pa-md-6">
                        <v-col v-if="salesOrder.salesOrderList.length > 0" sm-8>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-left">Brand</th>
                                  <th class="text-left">Pack</th>
                                  <th class="text-left">Unit</th>
                                  <th class="text-left">Unit Price</th>
                                  <th class="text-left">Subtotal</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in salesOrder.salesOrderList"
                                  :key="item.brand"
                                >
                                  <td>{{ item.brand }}</td>
                                  <td>
                                    {{ new Number(item.pack).toLocaleString() }}
                                  </td>
                                  <td>
                                    {{ new Number(item.unit).toLocaleString() }}
                                  </td>
                                  <td>
                                    {{
                                      new Number(item.price).toLocaleString()
                                    }}
                                  </td>
                                  <td>
                                    {{
                                      new Number(item.subTotal).toLocaleString()
                                    }}
                                  </td>
                                </tr>
                                <tr>
                                  <td class="font-weight-black">Total Sales</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td class="font-weight-black">
                                    GH₵
                                    {{
                                      Number(
                                        salesOrder.totalSales
                                      ).toLocaleString()
                                    }}
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-col>

                        <div v-else class="text-center">
                          <small> No orders added</small>
                        </div>
                      </v-row>
                    </div>
                    <v-btn color="primary" @click="e6 = 5">Continue</v-btn>
                    <v-btn @click="e6 = 3" icon outlined color="primary">
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="5">
                    <div>
                      <v-row justify="center">
                        <v-col sm="6" md="3" lg="3">
                          <div>
                            <v-text-field
                              ref="payment.cash"
                              prefix="GH₵"
                              v-model="payment.cash"
                              type="number"
                              label="Cash"
                              outlined
                              clearable
                            ></v-text-field>
                          </div>
                          <div>
                            <v-text-field
                              ref="payment.credit"
                              prefix="GH₵"
                              v-model="payment.credit"
                              type="number"
                              label="Credit"
                              outlined
                              clearable
                            ></v-text-field>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                    <v-btn color="primary" @click="addNewVisit">Continue</v-btn>
                    <v-btn @click="e6 = 4" icon outlined color="primary">
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  </v-stepper-content>

                  <v-stepper-content step="6">
                    <div class="d-flex justify-end my-2">
                      <v-btn @click="downloadInvoice" text icon color="primary"
                        ><v-icon>mdi-download</v-icon></v-btn
                      >
                      <v-btn @click="printInvoice" text icon color="primary"
                        ><v-icon>mdi-printer</v-icon>
                      </v-btn>
                    </div>

                    <v-card outlined class="ma-2">
                      <div>
                        <vue-pdf :previewLink="invoicePreviewLink" />
                      </div>
                    </v-card>

                    <v-btn color="primary">Continue</v-btn>
                    <v-btn @click="e6 = 5" icon outlined color="primary">
                      <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </div>
          </v-container>
        </div>
      </template>
    </salesman-layout>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";

import firebaseConfig from "~/src/lib/utils";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

import SalesmanLayout from "~/components/SalesmanLayout";
import BackButton from "~/components/BackButton";

import INVOICE_NUMBER from "~/apollo/queries/getInvoiceNumber";
import ALL_BRANDS from "~/apollo/queries/getAllBrands";

import ADD_INVOICE from "~/apollo/mutations/addInvoice";
import ADD_VISIT from "~/apollo/mutations/addVisit";

import VuePdf from "~/components/VuePdf";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
  name: "VisitsDataCollectionPage",
  layout: "salesman-page",
  components: {
    SalesmanLayout,
    BackButton,
    VuePdf
  },
  data() {
    return {
      getInvoiceNumber: "",
      uploadProgress: 0,
      overlay: false,
      invoicePreviewLink: "",
      pdfInvoice: "",
      outlet_id: this.$route.params.id,
      salesman_id: "5e5d2456eb91d649fff197cb",
      date: new Date().toDateString(),
      timeIn: new Date().getTime().toString(),
      timeOut: "",
      duration: "",
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
        price: "",
        subTotal: "",
        salesOrderList: []
      },
      summary: {},
      payment: {
        cash: 0,
        credit: 0
      },
      invoice: {}
    };
  },
  computed: {},
  apollo: {
    getAllBrands: {
      query: ALL_BRANDS,
      prefetch: true
    }
  },
  methods: {
    downloadInvoice() {
      this.pdfInvoice.download();
    },
    printInvoice() {
      this.pdfInvoice.print();
    },
    async addNewVisit() {
      this.timeOut = new Date().getTime().toString();
      this.duration = (Number(this.timeOut) - Number(this.timeIn)).toString();
      if (this.payment.cash === 0) {
        this.payment.paymentMethod = "credit";
      } else if (this.payment.credit === 0) {
        this.payment.paymentMethod = "cash";
      } else {
        this.payment.paymentMethod = "both";
      }
      try {
        const result = await this.$apollo.mutate({
          mutation: ADD_VISIT,
          variables: {
            visitInput: {
              salesman: this.salesman_id,
              outlet: this.outlet_id,
              date: this.date,
              timeIn: this.timeIn,
              timeOut: this.timeOut,
              duration: this.duration,
              dataCollected: {
                sellingPricePerUnitOfBrands: this.pricesCheckedList,
                stock: this.stockCheck.stockCheckedList,
                salesOrder: this.salesOrder.salesOrderList,
                salesOrderSummary: {
                  total: Number(this.salesOrder.totalSales),
                  cash: Number(this.payment.cash),
                  credit: Number(this.payment.credit),
                  paymentMethod: this.payment.paymentMethod
                }
              }
            }
          }
        });

        if (result.data.addVisit._id === null) {
          this.snackbarAlert("Could not add new visit", "error");
        } else {
          this.e6 = 6;
          this.overlay = true;
          const {
            salesOrder,
            salesOrderSummary
          } = result.data.addVisit.dataCollected;
          const salesOrderListOfLists = salesOrder.map(o => [
            { text: o.brand, style: "column" },
            { text: o.pack, style: "column" },
            { text: o.unit, style: "column" },
            { text: o.price, style: "column" },
            { text: o.subTotal, style: "column" }
          ]);
          // console.log("---sales order list of lists", ...salesOrderListOfLists);

          // console.log("---salesOrder---", salesOrder);

          const docDefinition = {
            defaultStyle: {
              fontSize: 8,
              color: "#555454"
            },
            pageSize: "A4",
            pageMargins: [50, 60, 50, 60],
            header: {
              text: "Invoice",
              margin: [500, 40, 0, 0],
              fontSize: 17,
              bold: true
            },
            styles: {
              header: {
                fontSize: 9,
                bold: true,
                color: "#585458"
              },
              column: {
                fontSize: 8
              }
            },
            content: [
              {
                text: `DATE: ${new Date().toDateString()}`,
                fontSize: 6
              },
              { text: "INVOICE NO:", fontSize: 6 },
              {
                alignment: "justify",
                columns: [
                  {
                    columns: [
                      { text: "FROM:", width: 50, bold: true },
                      [
                        {
                          text: "Company Name"
                        },
                        { text: "Company Contact" }
                      ]
                    ]
                  },
                  {
                    columns: [
                      { text: "TO:", width: 50, bold: true },
                      [
                        {
                          text: "Outlet Name"
                        },
                        { text: "Outlet Contact" }
                      ]
                    ]
                  }
                ]
              },
              {
                table: {
                  // headers are automatically repeated if the table spans over multiple pages
                  // you can declare how many rows should be treated as headers
                  headerRows: 1,
                  widths: ["*", "*", "*", "*", "*"],

                  body: [
                    [
                      { text: "Item Description", style: "header" },
                      { text: "Pack", style: "header" },
                      { text: "Unit", style: "header" },
                      { text: "Unit Price", style: "header" },
                      { text: "Subtotal(GHC)", style: "header" }
                    ],
                    ...salesOrderListOfLists,
                    [
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      {
                        text: "",
                        border: [false, false, false, false]
                      }
                    ],
                    [
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      {
                        text: "",
                        border: [false, false, false, false]
                      }
                    ],
                    [
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "Total(GHC)", bold: true, fontSize: 9 },
                      {
                        text: Number(salesOrderSummary.total).toLocaleString(),
                        fontSize: 8
                      }
                    ],

                    [
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "Cash(GHC)", fontSize: 9, bold: true },
                      {
                        text: Number(salesOrderSummary.cash).toLocaleString(),
                        fontSize: 8
                      }
                    ],
                    [
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "Credit(GHC)", fontSize: 9, bold: true },
                      {
                        text: Number(salesOrderSummary.credit).toLocaleString(),
                        fontSize: 8
                      }
                    ],
                    [
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "Tax", fontSize: 9, bold: true },
                      {
                        text: "",
                        fontSize: 8
                      }
                    ],
                    [
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "", border: [false, false, false, false] },
                      { text: "Balance Due", fontSize: 9, bold: true },
                      {
                        text: "",
                        fontSize: 8
                      }
                    ]
                  ]
                },

                layout: {
                  hLineWidth: function(i, node) {
                    return i === 0 || i === node.table.body.length ? 0.5 : 0.5;
                  },
                  vLineWidth: function(i, node) {
                    return i === 0 || i === node.table.widths.length
                      ? 0.5
                      : 0.5;
                  },
                  hLineColor: function(i, node) {
                    return i === 0 || i === node.table.body.length
                      ? "black"
                      : "gray";
                  },
                  vLineColor: function(i, node) {
                    return i === 0 || i === node.table.widths.length
                      ? "black"
                      : "gray";
                  }
                  // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                  // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                  // paddingLeft: function(i, node) { return 4; },
                  // paddingRight: function(i, node) { return 4; },
                  // paddingTop: function(i, node) { return 2; },
                  // paddingBottom: function(i, node) { return 2; },
                  // fillColor: function (rowIndex, node, columnIndex) { return null; }
                }
              }
            ]
          };

          const pdfDocGenerator = pdfMake.createPdf(docDefinition);
          this.pdfInvoice = pdfDocGenerator;

          pdfDocGenerator.getDataUrl(dataUrl => {
            this.invoicePreviewLink = dataUrl;
          });

          const storage = firebase.storage();
          const storageRef = storage.ref();
          const metadata = {
            contentType: "application/pdf"
          };

          let that = this;

          try {
            pdfDocGenerator.getBlob(blob => {
              const invoiceFileName = Date.now().toString() + ".pdf";
              const newFile = new File([blob], invoiceFileName);

              const uploadTask = storageRef
                .child(`invoices/${this.outlet_id}/${invoiceFileName}`)
                .put(newFile, metadata);

              uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                snapshot => {
                  this.uploadProgress = true;
                  const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  this.uploadProgress = progress;
                  console.log("Upload is " + progress + "% done");
                  switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                      console.log("Upload is paused");
                      break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                      console.log("Upload is running");
                      break;
                  }
                },
                error => {
                  // A full list of error codes is available at
                  // https://firebase.google.com/docs/storage/web/handle-errors
                  switch (error.code) {
                    case "storage/unauthorized":
                      // User doesn't have permission to access the object
                      break;

                    case "storage/canceled":
                      // User canceled the upload
                      break;

                    case "storage/unknown":
                      // Unknown error occurred, inspect error.serverResponse
                      snackbarAlert(
                        "Could not upload invoice to the cloud. Try again",
                        "error"
                      );
                      break;
                  }
                },
                () => {
                  // Upload completed successfully, now we can get the download URL
                  uploadTask.snapshot.ref
                    .getDownloadURL()
                    .then(function(downloadURL) {
                      that.overlay = false;
                      const invoiceNumber = that.$apollo.query({
                        query: INVOICE_NUMBER,
                        variables: {
                          outlet_id: that.outlet_id
                        }
                      });

                      invoiceNumber.then(({ data }) => {
                        if (data.getInvoiceNumber !== null) {
                          that.$apollo.mutate({
                            mutation: ADD_INVOICE,
                            variables: {
                              invoiceInput: {
                                date: that.date,
                                outlet: that.outlet_id,
                                salesman: that.salesman_id,
                                invoiceNumber: data.getInvoiceNumber + 1,
                                salesOrder: that.salesOrder.salesOrderList,
                                salesOrderSummary: {
                                  total: String(that.salesOrder.totalSales),
                                  cash: String(that.payment.cash),
                                  credit: String(that.payment.credit),
                                  paymentMethod: that.payment.paymentMethod
                                }
                              }
                            }
                          });
                        }
                      });

                      console.log("File available at", downloadURL);
                    });
                }
              );
            });
          } catch (error) {
            throw new Error(error);
          }

          // this.snackbarAlert("Visit completed successfully!", "success");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    snackbarAlert(msg, color) {
      this.snackbarMessage = msg;
      this.color = color;
      this.snackbar = true;
    },
    addToSalesOrderList() {
      if (
        this.selectedBrand &&
        (this.salesOrder.pack || this.salesOrder.unit) &&
        this.salesOrder.price
      ) {
        if (
          this.salesOrder.salesOrderList.filter(
            e => e.brand.name === this.selectedBrand
          ).length > 0
        ) {
          this.snackbarAlert(
            `${this.selectedBrand} has already been added`,
            "error"
          );
        } else {
          let subTotal = 0;
          if (Number(this.salesOrder.pack) === 0) {
            subTotal =
              Number(this.salesOrder.unit) * Number(this.salesOrder.price);
          } else if (Number(this.salesOrder.unit) === 0) {
            this.snackbarAlert(
              "Enter the number of units in one pack!",
              "error"
            ); //
            return;
          } else {
            subTotal =
              Number(this.salesOrder.pack) *
              Number(this.salesOrder.unit) *
              Number(this.salesOrder.price);
          }

          console.log("---calcuate subtotoal---", subTotal);

          this.salesOrder.salesOrderList.unshift({
            brand: this.selectedBrand.name,
            pack: Number(this.salesOrder.pack),
            unit: Number(this.salesOrder.unit),
            price: Number(this.salesOrder.price),
            subTotal: Number(subTotal)
          });

          if (this.salesOrder.salesOrderList.length === 1) {
            this.salesOrder.totalSales = this.salesOrder.salesOrderList[0].subTotal;
            console.log(
              "---single item: subtotal is total",
              this.salesOrder.totalSales
            );
          } else {
            this.salesOrder.totalSales = this.salesOrder.salesOrderList
              .map(item => Number(item.subTotal))
              .reduce((acc, cv) => acc + cv);
          }

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
          this.selectedBrand,
          "----pack-----",
          this.salesOrder.pack,
          "----unit---",
          this.salesOrder.unit
        );
      } else {
        if (!this.selectedBrand) {
          this.snackbarAlert("Select a brand!", "error");
        } else if (!(this.salesOrder.pack || this.salesOrder.unit)) {
          this.snackbarAlert("Both pack and unit cannot be empty", "error");
        }
      }
    },
    addToStockCheckedList() {
      if (this.selectedBrand && this.stockCheck.pack && this.stockCheck.unit) {
        if (
          this.stockCheck.stockCheckedList.filter(
            e => e.brand.name === this.selectedBrand
          ).length > 0
        ) {
          this.snackbarAlert(
            `${this.selectedBrand} has already been added`,
            "error"
          );
        } else {
          this.stockCheck.stockCheckedList.unshift({
            brand: this.selectedBrand.name,
            pack: Number(this.stockCheck.pack),
            unit: Number(this.stockCheck.unit)
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
          this.selectedBrand,
          "----pack-----",
          this.stockCheck.pack,
          "----unit",
          this.stockCheck.unit
        );
      } else {
        if (!this.selectedBrand) {
          this.snackbarAlert("Select a brand!", "error");
        } else if (!this.stockCheck.pack) {
          this.snackbarAlert("Enter the number of packs!", "error");
        } else if (!this.stockCheck.unit) {
          this.snackbarAlert("Enter the number of units!", "error");
        }
      }
    },
    addToPricesCheckedList() {
      if (this.selectedBrand && this.currentUnitPrice) {
        if (
          this.pricesCheckedList.filter(
            e => e.brand.name === this.selectedBrand
          ).length > 0
        ) {
          /* this.pricesCheckedList contains the element we're looking for */
          this.snackbarAlert(
            `${this.selectedBrand} has already been added`,
            "error"
          );
        } else {
          this.pricesCheckedList.unshift({
            brand: this.selectedBrand.name,
            sellingPricePerUnit: Number(this.currentUnitPrice)
          });

          this.currentUnitPrice = "";
          this.selectedBrand = "";
          this.recPriceRange.start = "";
        }

        this.sheet.priceCheck = !this.sheet.priceCheck;
        console.log(
          "-----selected brand name----",
          this.selectedBrand,
          "----currentUnitPrice-----",
          this.currentUnitPrice,
          "----prices checked list",
          this.pricesCheckedList
        );
      } else {
        if (!this.selectedBrand) {
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

        this.salesOrder.price = e.salesmanSellingPricePerUnit;

        console.log("-----select brand working-----", this.selectedBrand);
      } else {
        this.selectedBrand = {};
        this.recPriceRange = {};
        console.log("-----select brand working-----", this.selectedBrand);
      }
    }
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();

  //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //   });
  // }
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

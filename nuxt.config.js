import colors from "vuetify/es5/util/colors";
import apolloConfig from "./apollo/config";

export default {
  mode: "universal",
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap"
      }
    ]
  },

  loading: { color: "#fff" },

  css: [],

  plugins: [
    { src: "~/plugins/vue-pdf.js", ssr: false },
    "~/plugins/loading-brain"
  ],

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/apollo"],
  apollo: apolloConfig,

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    extend(config, ctx) {
      config.output.globalObject = "this";
      config.module.rules.push({
        test: /\.pdf$/,
        loader: "url-loader"
      });
    }
  },
  loading: "~/components/loading.vue"
};

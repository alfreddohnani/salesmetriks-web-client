export default function({ app }) {
  return {
    lang: {
      t: (key, ...params) => app.i18n.t(key, params)
    },
    breakpoint: {},
    icons: {},
    rtl: true,
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
  };
}

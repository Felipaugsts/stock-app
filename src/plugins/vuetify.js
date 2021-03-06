import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
export default  new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.grey.darken4,
        success: colors.teal.accent3,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
})
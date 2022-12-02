import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - finca-nuxt',
    title: 'finca-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/init',
    '~/plugins/service',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'nuxt-mq',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-svg-loader',
    '@nuxtjs/toast',
  ],

  'mq': {
    breakpoints: { // default breakpoints - customize this
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1921,
      xl: Infinity,
    },
    defaultBreakpoint: 'lg' // customize this for SSR
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.finca.ir/api/v1',
  },

  toast: {
    position: 'bottom-left',
    iconPack: 'custom-class',
    duration: 10000,
    icon: {
      name: 'toast-info',
    },
    action: {
      icon: 'toast-close',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      },
    },
  },

  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
      home: false
    },
    strategies: {
      local: {
        endpoints: {
          login: false,
          user: {
            url: '/Parent',
            method: 'get',
            propertyName: false,
            autoFetch: true
          },
          logout: false
        },
        autoFetchUser: true,
        tokenType: 'Bearer'
      }
    },
    plugins: ['~/plugins/api.service']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    rtl: true,
    defaultAssets: false,
    treeShake: true,
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
      themes: {
        light: {
          primary: '#375594',
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

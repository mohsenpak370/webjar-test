export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-starter',
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
    '@/assets/fonts/Vazir/Vazir.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/api/auth.js'},
    {src: '@/plugins/api/contents.js'},
    {src: '@/plugins/commonMethods.js'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://challenge.webjar.ir/',
  },

    // Auth module configuration (https://auth.nuxtjs.org/guide/scheme)
    auth: {
      redirect: {
        // login: '/auth/login',
        login: '/blog',
        logout: false,
        home: false,
      },
      strategies: {
        local: {
          token: {
            property: 'token',
            required: true,
            type: 'Bearer',
            maxAge: 3600 *24 * 365
          },
          user: {
            property: false, //'user',
            autoFetch: false
          },
          endpoints: {
            login: { url: 'auth/login', method: 'post' },
            // logout: { url: 'auth/logout', method: 'post' },
            user: false,
          },
        },
      },
    },   

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

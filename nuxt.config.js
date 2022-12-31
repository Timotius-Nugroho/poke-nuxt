export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Pokemons',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Pokémon! These cute and powerful creatures have captured the hearts of people everywhere.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `hhttps://catch-poke-nuxt.vercel.app/`,
      },
      { hid: 'og:type', property: 'og:type', content: `website` },
      { hid: 'og:title', property: 'og:title', content: `Pokemons` },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `Pokémon! These cute and powerful creatures have captured the hearts of people everywhere.`,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `https://catch-poke-nuxt.vercel.app/og-poke.png`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/nuxt-observe-visibility.js',
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['nuxt-observe-visibility'],
  },

  axios: {
    baseURL: 'https://graphql-pokeapi.graphcdn.app/', // Used as fallback if no runtime config is provided
  },
}

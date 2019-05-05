import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#666' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap.min.css'
  ],

  /**
   * Development Mode
   */

  //dev:false,

  /**
   * Envoiment
  */
  
  env: {
    baseURL : "https://kose-yazisi-nux-js.firebaseio.com/"
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/components.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/axios",
  ],

  axios: {
    //Axios özellikleri burada belirtilebilir.
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

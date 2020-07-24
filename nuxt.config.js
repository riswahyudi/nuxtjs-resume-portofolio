export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'My Resume & Portofolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i' }
    ],
    script: [
      {src:'js/main.js'},
      {src:'vendor/jquery/jquery.min.js'},
      {src:'vendor/bootstrap/js/bootstrap.bundle.min.js'},
      {src:'vendor/jquery.easing/jquery.easing.min.js'},
      {src:'vendor/php-email-form/validate.js'},
      {src:'vendor/waypoints/jquery.waypoints.min.js'},
      {src:'vendor/counterup/counterup.min.js'},
      {src:'vendor/isotope-layout/isotope.pkgd.min.js'},
      {src:'vendor/venobox/venobox.min.js'},
      {src:'vendor/owl.carousel/owl.carousel.min.js'},
      {src:'vendor/typed.js/typed.min.js'},
      {src:'vendor/aos/aos.js'},
 
   ]
  },
  /*
  ** Global CSS
  */
  css: [
     '@/assets/css/style.css',
     '@/assets/vendor/bootstrap/css/bootstrap.min.css',
     '@/assets/vendor/icofont/icofont.min.css',
     '@/assets/vendor/boxicons/css/boxicons.min.css',
     '@/assets/vendor/venobox/venobox.css',
     '@/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
     '@/assets/vendor/aos/aos.css'
  ],
  
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: "~/plugins/aos", ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}

const webpack = require("webpack");

module.exports = {
  // load bootstrap and jquery
  css: ["~/node_modules/bootstrap/dist/css/bootstrap.css"],
  plugins: ["~plugins/bootstrap.js"],
  build: {
    /**
     * add external plugins
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
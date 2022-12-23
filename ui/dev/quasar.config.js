// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

const path = require('path')
const webpack = require('webpack')

module.exports = function (ctx) {
  return {
    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    boot: [
      'register.js'
    ],

    css: [
      'app.sass'
    ],

    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons' // optional, you are not bound to it
    ],

    framework: {
      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      config: {},

      // Quasar plugins
      plugins: []
    },

    // animations: 'all', // --- includes all animations
    animations: [],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: 'history',

      chainWebpack (chain) {
        chain.resolve.alias.merge({
          ui: path.resolve(__dirname, `../src/index.esm.js`)
        })

        chain.plugin('define-ui')
          .use(webpack.DefinePlugin, [{
            __UI_VERSION__: `'${require('../package.json').version}'`
          }])
      }
    },

    devServer: {
      // port: 8080,
      open: true // opens browser window automatically
    },

    ssr: {
      ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR

      extendSSRWebserverConf (esbuildConf) {},

      // add/remove/change properties
      // of production generated package.json
      extendPackageJson (pkg) {
        // directly change props of pkg;
        // no need to return anything
      },

      pwa: false,

      /**
       * Manually serialize the store state and provide it yourself
       * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
       * (Requires @quasar/app-vite v1.0.0-beta.14+)
       */
      manualStoreSerialization: false,

      /**
       * Manually inject the store state into ssrContext.state
       * (Requires @quasar/app-vite v1.0.0-beta.14+)
       */
      manualStoreSsrContextInjection: false,

      /**
       * Manually handle the store hydration instead of letting Quasar CLI do it.
       * For Pinia: store.state.value = window.__INITIAL_STATE__
       * For Vuex: store.replaceState(window.__INITIAL_STATE__)
       */
      manualStoreHydration: false,

      /**
       * Manually call $q.onSSRHydrated() instead of letting Quasar CLI do it.
       * This announces that client-side code should takeover.
       */
      manualPostHydrationTrigger: false,

      prodPort: 3000, // The default port that the production server should use
                      // (gets superseded if ({}).PORT is specified at runtime)

      middlewares: [
        ctx.prod ? 'compression' : '',
        'render' // keep this as last one
      ]
    }
  }
}

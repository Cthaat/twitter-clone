// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  devtools: { enabled: true },
  compatibilityDate: '2024-07-08',
  modules: ['vuetify-nuxt-module', '@nuxt/eslint'],
  // esline: {
  //   config: {
  //     stylke: true,
  //   }
  // },
  // serverMiddleware: [
  //   { path: '/api', handler: '~/api/tweets.ts' }
  // ],

  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        prefersColorScheme: true
      }
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      defaultTheme: 'system',
      themes: {
        dark: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        },
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      }
    }
  }
}

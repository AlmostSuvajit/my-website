export default {
  mode: 'universal',

  head: {
    title: 'SUVAJIT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'My Personal Website' },
      { hid: 'image', name: 'image', content: 'https://suvajit.me/img/avatar.png' },
      { hid: 'application-name', name: 'application-name', content: 'SUVAJIT' },
      { hid: 'theme-color', name: 'theme-color', content: '#5970c1' },
      { hid: 'og:title', property: 'og:title', content: 'SUVAJIT' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt.JS' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description', property: 'og:description', content: 'My Personal Website' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image', property: 'og:image', content: 'https://suvajit.me/img/avatar.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '750' },
      { hid: 'og:image:height', property: 'og:image:height', content: '750' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Suvajit\'s Avatar' }
    ],
    link: [
      { rel: 'canonical', href: 'https://suvajit.me' },
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css' }
    ]
  },

  loading: { color: '#cedb9d' },

  css: [
    '~/static/css/reset.css',
    '~/static/css/default.css',
    '~/static/css/animate.css'
  ],

  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-gtag', { id: 'UA-148923434-1' }]
  ],

  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

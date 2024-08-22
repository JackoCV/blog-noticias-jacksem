export default {
  modules: ['@nuxt/content'],
  components: true,
  head: {
    titleTemplate: '%s - Blog Noticias',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My blog built with Nuxt.js' }
    ]
  },
  css: [
    '~/assets/main.css' 
  ]
}

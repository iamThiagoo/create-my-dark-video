// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],
  googleFonts: {
    families: {
      'Poppins': true, 
    },
    display: 'swap',
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English',   file: 'en.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'es', name: 'Espanhol',  file: 'es.json' },
    ],
    defaultLocale: 'pt',
    langDir: 'locales/',
    strategy: "no_prefix",
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      NUXT_APP_URL: process.env.NUXT_APP_URL,
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/svg/user-secret.svg' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/svg/user-secret.svg' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/svg/user-secret.svg' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/svg/user-secret.svg' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  googleFonts: {
    families: {
      'Poppins': true,
    },
    display: 'swap',
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'es', name: 'Espanhol', file: 'es.json' },
    ],
    defaultLocale: 'pt',
    langDir: 'locales/',
    strategy: "no_prefix",
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
})
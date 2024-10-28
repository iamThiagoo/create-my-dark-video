// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],
  googleFonts: {
    families: {
      'Poppins': true, 
    },
    display: 'swap',
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
})
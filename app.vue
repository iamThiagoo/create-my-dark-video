<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <Toaster />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const runtimeConfig = useRuntimeConfig()
import Toaster from '@/components/ui/toast/Toaster.vue'

useHead({
  title: 'Gere seu Dark Video em segundos',
  titleTemplate: 'Create My Dark Video - %s',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { name: 'title', content: 'Create My Dark Video' },
    { name: 'ogTitle', content: 'Create My Dark Video' },
    { name: 'description', content: 'Gere seu Dark Video em segundos' },

    { property: 'og:title', content: 'Create My Dark Video - Gere seu Dark Vídeo em segundos' },
    { property: 'og:description', content: 'Crie dark vídeos em segundos' },
    { property: 'og:image', content: '/favicon.ico' },
    { property: 'og:url', content: runtimeConfig.public.NUXT_APP_URL },
    { property: 'og:type', content: 'website' },

    { name: 'robots', content: 'index, follow' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
})

</script>
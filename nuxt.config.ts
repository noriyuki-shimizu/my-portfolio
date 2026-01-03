// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['@/assets/css/reset.css', '@/assets/css/global.css'],
  nitro: {
    prerender: {
      routes: ['/', '/skills', '/presentations', '/projects']
    }
  },
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'Shiminori Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Shiminoriのポートフォリオサイトです。' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0f172a' },
        { property: 'og:site_name', content: 'Shiminori Portfolio Site' },
        { property: 'og:description', content: 'Shiminoriのポートフォリオサイトです。' },
        { property: 'og:title', content: 'Shiminori Portfolio' },
        { property: 'og:image', content: `${import.meta.env.APPLICATION_BASE_URL}/images/top-view.webp` },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.jpg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.jpg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['@/assets/css/reset.css', '@/assets/css/global.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'Noriyuki Shimizu Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '清水 紀行のスキルとプロジェクトを紹介するポートフォリオサイト' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:description', content: '清水 紀行のスキルとプロジェクトを紹介するポートフォリオサイト' },
        { property: 'og:title', content: 'Noriyuki Shimizu Portfolio' }
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

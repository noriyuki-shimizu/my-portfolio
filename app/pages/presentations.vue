<script setup lang="ts">
/** 発表資料のデータ型 */
interface Presentation {
  /** ID */
  id: number
  /** タイトル */
  title: string
  /** 開催日 */
  date: string
  /** 開催場所 */
  venue: string
  /** イベントのリンク */
  venueLink?: string
  /** 概要 */
  description: string
  /** 資料のリンク */
  link?: string
  /** サムネイル画像 */
  thumbnail?: string
  /** タグ */
  tags: string[]
}

/** 発表資料のデータ（将来的にはAPIやCMSから取得） */
const presentations: Presentation[] = [
  {
    id: 1,
    title: 'Nuxt 認証基盤作成における Cookie 状態管理のポイント',
    date: '2025.10.25',
    venue: 'Vue Fes Japan 2025',
    venueLink: 'https://vuefes.jp/2025/',
    description:
      'Nuxtアプリケーションにおける認証基盤の構築時に重要となるCookieの状態管理について、実装のポイントや注意点を詳しく解説します。',
    link: 'https://gamma.app/docs/Nuxt-Cookie--3tmj2du5ltzn66z',
    thumbnail: '/images/vue-fes-japan-2025.webp',
    tags: ['Nuxt', 'Vue.js', 'Authentication', 'Cookie', 'State Management']
  },
  {
    id: 2,
    title: '勢いに乗って MCP サーバ作ってみた',
    date: '2025.05.29',
    venue: 'TSKaigi 2025 本編で話せなかったこと、話し足りなかったこと',
    venueLink: 'https://freee.connpass.com/event/351699/',
    description: '@modelcontextprotocol/sdk を活用して、独自のMCPサーバを構築した経験を共有します。',
    link: 'https://gamma.app/docs/MCP--ibrd92jgmyanm2l',
    thumbnail: '/images/ts-kaigi-2025-after-talk.webp',
    tags: ['Node.js', 'TypeScript', 'MCP', 'Playwright', 'a11y', 'zod']
  }
]

// Meta tags for SEO
useSeoMeta({
  title: 'Presentations - Shiminori Portfolio',
  description: 'Shiminoriの外部登壇や発表資料をまとめています。技術的な知見や経験をシェアした内容をご覧いただけます。',
  ogTitle: 'Presentations - Shiminori Portfolio',
  ogDescription: 'Shiminoriの外部登壇や発表資料をまとめています。技術的な知見や経験をシェアした内容をご覧いただけます。',
  ogType: 'website'
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Presentations
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6" aria-hidden="true"></div>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">外部での登壇や発表資料をまとめています</p>
        </div>
      </div>
    </section>

    <!-- Presentations Grid -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div
            v-if="presentations.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="発表資料一覧"
          >
            <PresentationCard
              v-for="presentation in presentations"
              :key="presentation.id"
              :presentation="presentation"
              class="animate-fade-in-up"
              :style="`animation-delay: ${presentation.id * 0.1}s`"
              role="listitem"
            />
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-20">
            <div class="mb-8">
              <div
                class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50"
                aria-hidden="true"
              >
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v9.172a3 3 0 01-.879 2.12L15 17.415a1 1 0 01-1.414 0L12 15.828 10.414 17.415a1 1 0 01-1.414 0L7.879 15.293A3 3 0 017 13.172V4a1 1 0 011-1z"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-white mb-4">準備中です</h2>
              <p class="text-gray-400 max-w-md mx-auto">
                発表資料の準備ができ次第、こちらに掲載予定です。<br />
                今しばらくお待ちください。
              </p>
            </div>

            <!-- Call to Action -->
            <div class="flex justify-center space-x-4">
              <NuxtLink
                to="/skills"
                class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                aria-label="スキルページへ移動"
              >
                スキルを見る
              </NuxtLink>
              <NuxtLink
                to="/projects"
                class="px-6 py-3 border-2 border-purple-400 rounded-full font-semibold text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
                aria-label="プロジェクトページへ移動"
              >
                プロジェクトを見る
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

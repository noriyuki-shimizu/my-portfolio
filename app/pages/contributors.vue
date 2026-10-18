<script setup lang="ts">
/** コントリビューションのデータ型 */
interface Contribution {
  /** ID */
  id: number
  /** OSSプロジェクト名 */
  project: string
  /** プロジェクトの説明 */
  projectDescription: string
  /** コントリビューション内容 */
  description: string
  /** Pull Request のリンク */
  prLink: string
  /** リポジトリのリンク */
  repositoryUrl: string
  /** マージ日 */
  mergedDate: string
  /** タグ */
  tags: string[]
  /** サムネイル画像 */
  thumbnail?: string
}

/** コントリビューションのデータ（将来的にはAPIやCMSから取得） */
const contributions: Contribution[] = [
  {
    id: 1,
    project: 'Nuxt',
    projectDescription: 'Vue.jsベースのフレームワークで、サーバーサイドレンダリングや静的サイト生成をサポートしています。',
    description: 'Nuxt プロジェクト全体の ESLint の設定を修正し、コード品質の向上に貢献しました。',
    prLink: 'https://github.com/nuxt/nuxt/pull/34490',
    repositoryUrl: 'https://github.com/nuxt/nuxt',
    mergedDate: '2026-03-10',
    tags: ['chore', 'ESLint', 'Code Quality'],
    thumbnail: '/images/nuxt-icon.webp'
  }
]

// Meta tags for SEO
useSeoMeta({
  title: 'OSS Contributions - Shiminori Portfolio',
  description: 'ShiminoriがContributorとして貢献したOSSプロジェクトの一覧。オープンソースへの貢献活動をまとめています。',
  ogTitle: 'OSS Contributions - Shiminori Portfolio',
  ogDescription: 'ShiminoriがContributorとして貢献したOSSプロジェクトの一覧。オープンソースへの貢献活動をまとめています。',
  ogType: 'website'
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <section class="py-10">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            OSS Contributions
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-6" aria-hidden="true"></div>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">Contributorとして貢献したOSSプロジェクトをまとめています</p>
        </div>
      </div>
    </section>

    <!-- Contributions Grid -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <div
            v-if="contributions.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="OSSコントリビューション一覧"
          >
            <div
              v-for="contribution in contributions"
              :key="contribution.id"
              class="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 transform group animate-fade-in-up h-full flex flex-col"
              :style="`animation-delay: ${contribution.id * 0.1}s`"
              role="listitem"
            >
              <!-- Header with Icon -->
              <NuxtImg
                v-if="contribution.thumbnail"
                :src="contribution.thumbnail"
                :alt="`${contribution.project} - thumbnail`"
                class="w-full h-full object-cover transition-transform duration-300"
                width="600"
                height="400"
                sizes="sm:100vw md:50vw lg:400px"
                loading="lazy"
              />
              <div v-else class="relative h-32 bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center">
                <svg class="w-16 h-16 text-green-400 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>

              <!-- Content -->
              <div class="p-6 flex-1 flex flex-col">
                <!-- Project Name -->
                <h2 class="text-xl font-semibold text-white mb-2 transition-colors duration-300">
                  {{ contribution.project }}
                </h2>

                <!-- Project Description -->
                <p class="text-gray-500 text-xs mb-3 leading-relaxed">
                  {{ contribution.projectDescription }}
                </p>

                <!-- Merged Date -->
                <div class="flex items-center text-sm text-gray-400 mb-3">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{{ contribution.mergedDate }}</span>
                </div>

                <!-- Contribution Description -->
                <p class="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                  {{ contribution.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-6" role="list" aria-label="タグ">
                  <span
                    v-for="tag in contribution.tags"
                    :key="tag"
                    class="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30"
                    role="listitem"
                    :aria-label="`タグ: ${tag}`"
                  >
                    {{ tag }}
                  </span>
                </div>

                <!-- Links -->
                <div class="flex flex-col gap-2 mt-auto">
                  <NuxtLink
                    :to="contribution.prLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    :aria-label="`${contribution.project}へのPull Requestを新しいタブで開く`"
                  >
                    Pull Request を見る
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </NuxtLink>

                  <NuxtLink
                    :to="contribution.repositoryUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center px-4 py-2 border-2 border-green-400 rounded-lg font-semibold bg-green-400 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    :aria-label="`${contribution.project}のリポジトリを新しいタブで開く`"
                  >
                    Repository
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-10">
            <div class="mb-8">
              <div
                class="w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 opacity-50"
                aria-hidden="true"
              >
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
              <p class="text-gray-400 text-lg">OSSコントリビューションの情報を準備中です</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

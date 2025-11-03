<script setup lang="ts">
/** 技術情報の型 */
interface Technology {
  /** 技術名 */
  name: string
  /** バッジの色 */
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'pink' | 'cyan' | 'gray'
}

/** プロジェクトの型 */
interface Project {
  /** ID */
  id: number
  /** タイトル */
  title: string
  /** 概要 */
  description: string
  /** 使用技術 */
  technologies: Technology[]
  /** デモURL */
  demoUrl?: string
  /** リポジトリURL */
  repositoryUrl?: string
  /** npmパッケージURL */
  npmUrl?: string
  /** 画像 */
  image: string
}

/** プロジェクトデータ */
const projects: Project[] = [
  {
    id: 1,
    title: '技術記事閲覧サイト',
    description: 'Qiita／Zenn／note の技術記事を閲覧するためのサイトです。',
    technologies: [
      { name: 'Nuxt.js', color: 'green' },
      { name: 'Vue.js', color: 'green' },
      { name: 'TypeScript', color: 'blue' }
    ],
    demoUrl: 'https://shiminori-tec-articles.onrender.com/',
    repositoryUrl: 'https://github.com/noriyuki-shimizu/article-nuxt3',
    image: '/images/article-nuxt3-600x400.webp'
  },
  {
    id: 2,
    title: 'Book Realm',
    description:
      '書籍管理アプリです。Google Generative AI を使用して画像を解析させ、登録を補助します。その他、フォームからの入力も行えます。',
    technologies: [
      { name: 'Nuxt.js', color: 'green' },
      { name: 'Vue.js', color: 'green' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Gemini AI', color: 'purple' },
      { name: 'Firebase', color: 'green' }
    ],
    demoUrl: 'https://book-realm-xi.vercel.app/',
    repositoryUrl: 'https://github.com/noriyuki-shimizu/book-realm',
    image: '/images/book-realm-600x400.webp'
  },
  {
    id: 3,
    title: 'Audio Scribe',
    description:
      'MTG（会議）などの人の音声を読み取り、画面にリアルタイムで文字起こしするサービスです。Nuxt v4 を使用するために作成したサービスとなります。',
    technologies: [
      { name: 'Nuxt.js', color: 'green' },
      { name: 'Vue.js', color: 'green' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'OpenAI', color: 'purple' },
      { name: 'Socket.io', color: 'purple' }
    ],
    demoUrl: 'https://audio-scribe-ten.vercel.app/',
    repositoryUrl: 'https://github.com/noriyuki-shimizu/audio-scribe',
    image: '/images/audio-scribe-600x400.webp'
  },
  {
    id: 4,
    title: 'Front UI Parts',
    description:
      'Vue3 + Vite における UI ライブラリ。パッケージ公開を目的とし、業務でも使用できるための練習用として作成したパッケージです。',
    technologies: [
      { name: 'Vue.js', color: 'green' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Vite', color: 'purple' },
      { name: 'Storybook', color: 'pink' },
      { name: 'Vitest', color: 'green' }
    ],
    demoUrl: 'https://noriyuki-shimizu.github.io/front-ui-parts/?path=/docs/data-display-empty--docs',
    npmUrl: 'https://www.npmjs.com/package/front-ui-parts',
    image: '/images/front-ui-parts-600x400.webp'
  },
  {
    id: 5,
    title: 'My Room',
    description:
      'Nature Remo の Open API を使用して自身の部屋の温度・湿度・照度の変化をグラフで参照できるサイトです。自身でしか参照できない Web アプリとなります。',
    technologies: [
      { name: 'Nuxt.js', color: 'green' },
      { name: 'Vue.js', color: 'green' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Chart.js', color: 'orange' },
      { name: 'Nature Remo API', color: 'green' }
    ],
    repositoryUrl: 'https://github.com/noriyuki-shimizu/remo-web2/tree/main',
    image: '/images/my-room-600x400.webp'
  },
  {
    id: 6,
    title: 'a11y test MCP',
    description: 'アクセシビリティテストを行うための MCP サーバです。複数のリンクに対応しており、WCAG のレベルも指定できます。',
    technologies: [
      { name: 'TypeScript', color: 'blue' },
      { name: 'Node.js', color: 'green' },
      { name: 'Playwright', color: 'purple' },
      { name: 'axe-core', color: 'red' },
      { name: 'MCP', color: 'gray' }
    ],
    npmUrl: 'https://www.npmjs.com/package/a11y-test-mcp?activeTab=readme',
    image: '/images/a11y-test-mcp-600x400.webp'
  },
  {
    id: 7,
    title: 'Performance Audit CLI Tool',
    description:
      'フロントエンド・SSR(Server-Side Rendering)アプリケーションのパフォーマンスを継続的に監視・分析し、パフォーマンス劣化を防ぐためのCLIツール。',
    technologies: [
      { name: 'TypeScript', color: 'blue' },
      { name: 'Node.js', color: 'green' },
      { name: 'Lighthouse', color: 'orange' },
      { name: 'CLI', color: 'gray' }
    ],
    npmUrl: 'https://www.npmjs.com/package/perf-audit-cli?activeTab=readme',
    image: '/images/perf-audit-cli.webp'
  }
]

// Meta tags for SEO
useSeoMeta({
  title: 'Personal Projects - Shiminori Portfolio',
  description:
    'Shiminoriが個人で開発したプロジェクトやツールの紹介。Webアプリケーション、CLIツール、npmパッケージなど様々な作品をご覧いただけます。',
  ogTitle: 'Personal Projects - Shiminori Portfolio',
  ogDescription:
    'Shiminoriが個人で開発したプロジェクトやツールの紹介。Webアプリケーション、CLIツール、npmパッケージなど様々な作品をご覧いただけます。',
  ogType: 'website'
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h1
            class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Personal Projects
          </h1>
          <div
            class="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full mb-6"
            aria-hidden="true"
          ></div>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">個人で開発したプロジェクトやツールをご紹介します</p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" role="list" aria-label="プロジェクト一覧">
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="animate-fade-in-up"
              :style="`animation-delay: ${index * 0.1}s`"
              role="listitem"
            >
              <div
                class="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 transform group h-full flex flex-col"
              >
                <!-- Project Image -->
                <div class="relative h-48 overflow-hidden">
                  <img
                    :src="project.image"
                    :alt="`${project.title}のプロジェクト画像`"
                    class="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
                    aria-hidden="true"
                  ></div>
                </div>

                <!-- Project Content -->
                <div class="p-6 flex-1 flex flex-col">
                  <!-- Title -->
                  <h2 class="text-xl font-semibold text-white mb-3 transition-colors duration-300">
                    {{ project.title }}
                  </h2>

                  <!-- Description -->
                  <p class="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                    {{ project.description }}
                  </p>

                  <!-- Technologies -->
                  <div class="mb-6">
                    <h3 class="text-white font-semibold mb-3 text-sm">使用技術</h3>
                    <div class="flex flex-wrap gap-2" role="list" aria-label="使用技術一覧">
                      <TechBadge v-for="tech in project.technologies" :key="tech.name" :tech="tech.name" :color="tech.color" />
                    </div>
                  </div>

                  <!-- Links -->
                  <div class="flex flex-wrap gap-3 mt-auto">
                    <NuxtLink
                      v-if="project.demoUrl"
                      :to="project.demoUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center flex-1 min-w-[120px] px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      :aria-label="`${project.title}のデモサイトを新しいタブで開く`"
                    >
                      View Site
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
                      v-if="project.repositoryUrl"
                      :to="project.repositoryUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center flex-1 min-w-[120px] px-4 py-2 border-2 border-purple-400 rounded-lg font-semibold text-purple-400 bg-purple-400 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      :aria-label="`${project.title}のリポジトリを新しいタブで開く`"
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

                    <NuxtLink
                      v-if="project.npmUrl"
                      :to="project.npmUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center justify-center flex-1 min-w-[120px] px-4 py-2 border-2 border-red-400 rounded-lg font-semibold text-red-400 bg-red-400 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      :aria-label="`${project.title}のnpmパッケージを新しいタブで開く`"
                    >
                      npm
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
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

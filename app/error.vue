<script setup lang="ts">
import type { NuxtError } from '#app'

/** Props */
const props = defineProps<{
  /** Error */
  error: NuxtError
}>()

/** Page Title */
const pageTitle = props.error?.statusCode === 404 ? 'ページが見つかりません' : 'エラーが発生しました'

/** Description */
const description = props.error?.statusCode === 404 ? 'お探しのページは見つかりませんでした。' : '申し訳ありません。エラーが発生しました。'

/** Error color based on status code */
const errorColor = props.error?.statusCode === 404 ? 'from-purple-400 to-pink-400' : 'from-red-400 to-orange-400'

// Meta tags for SEO
useSeoMeta({
  title: `${pageTitle} - Shiminori Portfolio`,
  description: description,
  ogTitle: `${pageTitle} - Shiminori Portfolio`,
  ogDescription: description,
  ogType: 'website'
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
      ></div>
      <div
        class="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
      ></div>
    </div>

    <!-- Main Content -->
    <main class="flex justify-center items-center min-h-screen py-16 px-6">
      <div class="text-center max-w-2xl mx-auto">
        <!-- Error Icon -->
        <div class="mb-8 animate-bounce">
          <div class="relative inline-block">
            <div
              :class="`absolute inset-0 bg-gradient-to-r ${errorColor} rounded-full blur-lg opacity-50 animate-pulse-slow`"
              aria-hidden="true"
            ></div>
            <div
              :class="`relative w-24 h-24 bg-gradient-to-r ${errorColor} rounded-full flex items-center justify-center mx-auto`"
              aria-hidden="true"
            >
              <svg
                v-if="props.error?.statusCode === 404"
                class="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.935.765-5.344 2.018m6.344-2.018a7.962 7.962 0 005.344 2.018m-3.344-2.018a3.012 3.012 0 00-2.344 0M12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <svg v-else class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>

        <!-- Error Content -->
        <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
          <!-- Status Code -->
          <h1 :class="`text-6xl md:text-8xl font-bold bg-gradient-to-r ${errorColor} bg-clip-text text-transparent mb-4`">
            {{ props.error?.statusCode }}
          </h1>

          <!-- Title -->
          <h2 class="text-2xl md:text-3xl font-semibold text-white mb-4">
            {{ pageTitle }}
          </h2>

          <!-- Description -->
          <p class="text-lg text-gray-400 mb-8 leading-relaxed">
            {{ description }}
          </p>

          <!-- Error Details (for development) -->
          <div v-if="props.error?.statusMessage" class="mb-6">
            <details class="text-left">
              <summary class="text-gray-400 cursor-pointer hover:text-white transition-colors duration-300">エラー詳細を表示</summary>
              <div class="mt-4 p-4 bg-black/20 rounded-lg">
                <p class="text-sm text-gray-300 break-all">{{ props.error.statusMessage }}</p>
              </div>
            </details>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/"
              class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              aria-label="ホームページに戻る"
            >
              ホームに戻る
            </NuxtLink>
          </div>
        </div>

        <!-- Additional Navigation -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <!-- Skills Link -->
          <NuxtLink
            to="/skills"
            class="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300"
            role="listitem"
            aria-label="スキルページに移動"
          >
            <div class="text-center">
              <div
                class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 class="text-white font-medium text-sm">Skills</h3>
            </div>
          </NuxtLink>

          <!-- Presentations Link -->
          <NuxtLink
            to="/presentations"
            class="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
            role="listitem"
            aria-label="発表資料ページに移動"
          >
            <div class="text-center">
              <div
                class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v9.172a3 3 0 01-.879 2.12L15 17.415a1 1 0 01-1.414 0L12 15.828 10.414 17.415a1 1 0 01-1.414 0L7.879 15.293A3 3 0 017 13.172V4a1 1 0 011-1z"
                  />
                </svg>
              </div>
              <h3 class="text-white font-medium text-sm">Presentations</h3>
            </div>
          </NuxtLink>

          <!-- Projects Link -->
          <NuxtLink
            to="/projects"
            class="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300"
            role="listitem"
            aria-label="プロジェクトページに移動"
          >
            <div class="text-center">
              <div
                class="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 class="text-white font-medium text-sm">Projects</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

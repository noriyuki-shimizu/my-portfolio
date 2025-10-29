<template>
  <div
    class="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 transform group"
  >
    <!-- Thumbnail -->
    <div class="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
      <img
        v-if="presentation.thumbnail"
        :src="presentation.thumbnail"
        :alt="`${presentation.title} - thumbnail`"
        class="w-full h-full object-cover transition-transform duration-300"
      />
      <div v-else class="flex items-center justify-center h-full">
        <svg class="w-16 h-16 text-purple-400 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v9.172a3 3 0 01-.879 2.12L15 17.415a1 1 0 01-1.414 0L12 15.828 10.414 17.415a1 1 0 01-1.414 0L7.879 15.293A3 3 0 017 13.172V4a1 1 0 011-1z"
          />
        </svg>
      </div>

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
      ></div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Date and Venue -->
      <div class="flex items-center text-sm text-gray-400 mb-3">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>{{ formatDate(presentation.date) }}</span>
        <span class="mx-2">•</span>
        <NuxtLink
          v-if="presentation.venueLink"
          :to="presentation.venueLink"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors duration-300"
        >
          {{ presentation.venue }}
        </NuxtLink>
        <span v-else>{{ presentation.venue }}</span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-semibold text-white mb-3 transition-colors duration-300">
        {{ presentation.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-400 text-sm mb-4 leading-relaxed">
        {{ presentation.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in presentation.tags"
          :key="tag"
          class="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Link -->
      <div v-if="presentation.link" class="flex justify-between items-center">
        <NuxtLink
          :to="presentation.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-purple-400 hover:text-white font-medium transition-colors duration-300"
        >
          資料を見る
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
</template>

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

/** 発表資料カードのプロパティ */
interface Props {
  /** 発表資料のデータ */
  presentation: Presentation
}

defineProps<Props>()

/**
 * 日付をフォーマットする
 * @param dateString - 日付文字列
 * @returns フォーマット済みの日付
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

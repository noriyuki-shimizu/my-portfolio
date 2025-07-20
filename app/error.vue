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
</script>

<template>
  <div class="flex justify-center items-center min-h-screen text-center font-sans bg-gray-100 text-gray-800">
    <div class="p-8 rounded-lg bg-white shadow-md">
      <h1 class="text-6xl font-bold text-red-600 mb-2">{{ props.error?.statusCode }}</h1>
      <p class="text-2xl font-bold mb-4">{{ pageTitle }}</p>
      <p class="text-base mb-8 text-gray-600">{{ description }}</p>
      <NuxtLink
        to="/"
        class="inline-block px-6 py-3 text-base text-white bg-blue-500 rounded no-underline transition duration-300 ease-in-out hover:bg-blue-700"
      >
        トップページへ戻る
      </NuxtLink>
    </div>
  </div>
</template>

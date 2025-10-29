<template>
  <NuxtLink
    :to="to"
    :class="[
      'relative font-medium transition-all duration-300 group',
      mobile ? 'block py-2 text-lg' : 'inline-block',
      active ? 'text-blue-400' : 'text-gray-300 hover:text-white'
    ]"
    :aria-current="active ? 'page' : undefined"
  >
    <span :class="{ 'pl-4': mobile && active }">{{ $slots.default?.()[0]?.children }}</span>

    <!-- Active indicator -->
    <span
      v-if="!mobile"
      class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"
      :class="{ 'w-full': active }"
      aria-hidden="true"
    ></span>

    <!-- Mobile active indicator -->
    <span
      v-if="mobile && active"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r"
      aria-hidden="true"
    ></span>
  </NuxtLink>
</template>

<script setup lang="ts">
/** ナビゲーションリンクのプロパティ */
interface Props {
  /** リンク先のパス */
  to: string
  /** アクティブ状態かどうか */
  active?: boolean
  /** モバイル表示かどうか */
  mobile?: boolean
}

defineProps<Props>()
</script>

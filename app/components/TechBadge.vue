<template>
  <span
    :class="['inline-block px-3 py-1 text-xs font-semibold rounded-full border', colorClasses[color] || colorClasses.gray]"
    role="listitem"
    :aria-label="`技術: ${tech}`"
  >
    {{ tech }}
  </span>
</template>

<script setup lang="ts">
/** 技術バッジのプロパティ */
interface Props {
  /** 技術名 */
  tech: string
  /** バッジの色 */
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'pink' | 'cyan' | 'gray'
}

/** プロパティの設定 */
const { color = 'gray' } = defineProps<Props>()

/** カラー別のCSSクラス */
const colorClasses = {
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  green: 'bg-green-500/20 text-green-300 border-green-500/30',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  red: 'bg-red-500/20 text-red-300 border-red-500/30',
  pink: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  gray: 'bg-gray-500/20 text-gray-300 border-gray-500/30'
}
</script>

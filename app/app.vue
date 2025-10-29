<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div>
    <Analytics />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

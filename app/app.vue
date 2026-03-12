<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div>
    <NuxtAnnouncer />
    <NuxtRouteAnnouncer />
    <Analytics />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

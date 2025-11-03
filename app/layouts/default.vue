<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10"
      role="navigation"
      aria-label="メインナビゲーション"
    >
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            aria-label="ホームページに戻る"
          >
            Shiminori
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8" role="list">
            <NavLink to="/" :active="$route.path === '/'" role="listitem">Home</NavLink>
            <NavLink to="/skills" :active="$route.path === '/skills'" role="listitem">Skills</NavLink>
            <NavLink to="/presentations" :active="$route.path === '/presentations'" role="listitem">Presentations</NavLink>
            <NavLink to="/projects" :active="$route.path === '/projects'" role="listitem">Projects</NavLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            aria-label="モバイルメニューを開く"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            @click="toggleMobileMenu"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span
                class="block w-5 h-0.5 bg-white transform transition-all duration-300"
                :class="{ 'rotate-45 translate-y-1': mobileMenuOpen, '-translate-y-1': !mobileMenuOpen }"
              ></span>
              <span class="block w-5 h-0.5 bg-white transition-opacity duration-300" :class="{ 'opacity-0': mobileMenuOpen }"></span>
              <span
                class="block w-5 h-0.5 bg-white transform transition-all duration-300"
                :class="{ '-rotate-45 -translate-y-1': mobileMenuOpen, 'translate-y-1': !mobileMenuOpen }"
              ></span>
            </div>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          id="mobile-menu"
          class="md:hidden overflow-hidden transition-all duration-300"
          :class="{ 'max-h-64 mt-4': mobileMenuOpen, 'max-h-0': !mobileMenuOpen }"
          role="list"
          aria-label="モバイルナビゲーション"
        >
          <div class="space-y-4 pb-4">
            <NavLink to="/" :active="$route.path === '/'" mobile role="listitem" @click="mobileMenuOpen = false">Home</NavLink>
            <NavLink to="/skills" :active="$route.path === '/skills'" mobile role="listitem" @click="mobileMenuOpen = false"
              >Skills</NavLink
            >
            <NavLink to="/presentations" :active="$route.path === '/presentations'" mobile role="listitem" @click="mobileMenuOpen = false"
              >Presentations</NavLink
            >
            <NavLink to="/projects" :active="$route.path === '/projects'" mobile role="listitem" @click="mobileMenuOpen = false"
              >Projects</NavLink
            >
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-white/10 bg-black/20 backdrop-blur-sm" role="contentinfo">
      <div class="container mx-auto px-6 py-12">
        <div class="text-center">
          <div class="mb-8">
            <h2 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <div class="flex justify-center space-x-6" role="list" aria-label="ソーシャルリンク">
              <SocialLink href="https://github.com/noriyuki-shimizu" icon="github" label="GitHub" />
              <SocialLink href="https://x.com/smnr14785228" icon="twitter" label="Twitter" />
              <SocialLink href="https://qiita.com/shiminori0612" icon="qiita" label="Qiita" />
              <SocialLink href="https://zenn.dev/shiminori" icon="zenn" label="Zenn" />
            </div>
          </div>
          <div class="text-gray-400 text-sm">
            <p>&copy; 2025 Noriyuki Shimizu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>

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
  </div>
</template>

<script setup lang="ts">
/** モバイルメニューの開閉状態 */
const mobileMenuOpen = ref(false)

/** モバイルメニューの開閉を切り替える */
const toggleMobileMenu = (): void => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

/**
 * メニューの外側をクリックした時にメニューを閉じる
 * @param event - クリックイベント
 */
const handleClickOutside = (event: Event): void => {
  const nav = document.querySelector('nav')
  const target = event.target as Node | null
  if (nav !== null && target !== null && !nav.contains(target)) {
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

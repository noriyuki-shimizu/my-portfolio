<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center">
          <!-- Profile Image with floating animation -->
          <div class="mb-8 animate-float">
            <div class="relative inline-block">
              <div
                class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-lg opacity-50 animate-pulse-slow"
              ></div>
              <img
                src="/images/profile-400.webp"
                srcset="/images/profile-200.webp 200w, /images/profile-400.webp 400w, /images/profile-800.webp 800w"
                sizes="(max-width: 768px) 200px, 400px"
                alt="Profile photo of Noriyuki Shimizu"
                class="relative w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl mx-auto"
                width="192"
                height="192"
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>

          <!-- Animated text -->
          <div class="space-y-6 animate-fade-in-up">
            <h1 class="text-5xl md:text-7xl font-bold">
              <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Shiminori</span>
            </h1>

            <h2 class="text-xl md:text-2xl text-gray-300 font-light">Frontend Engineer</h2>

            <p class="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              最新の技術にアンテナを貼り、常に学び続ける姿勢を大切にしています。<br />
              ユーザーエクスペリエンスを重視した、美しく機能的なWebアプリケーションの開発を得意としています。
            </p>
          </div>

          <!-- Social Links -->
          <div class="mt-12 flex justify-center space-x-6 animate-fade-in-up" style="animation-delay: 0.3s">
            <SocialLink href="https://github.com/noriyuki-shimizu" icon="github" label="GitHub" />
            <SocialLink href="https://x.com/smnr14785228" icon="twitter" label="Twitter" />
            <SocialLink href="https://qiita.com/shiminori0612" icon="qiita" label="Qiita" />
            <SocialLink href="https://zenn.dev/shiminori" icon="zenn" label="Zenn" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Personal Info -->
            <div class="space-y-8 animate-slide-in-left">
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 class="text-2xl font-semibold text-blue-400 mb-6">Personal Information</h3>

                <div class="space-y-4">
                  <div class="flex items-center space-x-4">
                    <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div>
                      <span class="text-gray-400">Name:</span>
                      <span class="ml-2 text-white font-medium">清水 紀行</span>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div>
                      <span class="text-gray-400">Born:</span>
                      <span class="ml-2 text-white font-medium">1994年06月12日</span>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <div class="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div>
                      <span class="text-gray-400">Role:</span>
                      <span class="ml-2 text-white font-medium">Frontend Engineer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Philosophy -->
            <div class="animate-slide-in-right">
              <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 class="text-2xl font-semibold text-purple-400 mb-6">My Philosophy</h3>

                <div class="space-y-6">
                  <div class="flex space-x-4">
                    <div
                      class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 class="text-white font-semibold mb-2">Continuous Learning</h4>
                      <p class="text-gray-400 text-sm">最新の技術動向を常にキャッチアップし、継続的に学習することを心がけています。</p>
                    </div>
                  </div>

                  <div class="flex space-x-4">
                    <div
                      class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 class="text-white font-semibold mb-2">User-Centric Design</h4>
                      <p class="text-gray-400 text-sm">ユーザーの体験を第一に考え、使いやすく美しいインターフェースの実現を目指します。</p>
                    </div>
                  </div>

                  <div class="flex space-x-4">
                    <div
                      class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center"
                    >
                      <span class="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 class="text-white font-semibold mb-2">Quality Code</h4>
                      <p class="text-gray-400 text-sm">保守性と拡張性を重視した、クリーンで品質の高いコードを書くことを心がけています。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Explore
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Skills Card -->
          <NuxtLink
            to="/skills"
            class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Skills & Experience</h3>
              <p class="text-gray-400 text-sm">技術スタックとこれまでの経験をタイムライン形式で紹介</p>
            </div>
          </NuxtLink>

          <!-- Presentations Card -->
          <NuxtLink
            to="/presentations"
            class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v9.172a3 3 0 01-.879 2.12L15 17.415a1 1 0 01-1.414 0L12 15.828 10.414 17.415a1 1 0 01-1.414 0L7.879 15.293A3 3 0 017 13.172V4a1 1 0 011-1z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Presentations</h3>
              <p class="text-gray-400 text-sm">外部での登壇や発表資料をまとめています</p>
            </div>
          </NuxtLink>

          <!-- Projects Card -->
          <NuxtLink
            to="/projects"
            class="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <div class="text-center">
              <div
                class="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Personal Projects</h3>
              <p class="text-gray-400 text-sm">個人で開発したプロジェクトやツールの紹介</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags for SEO
useSeoMeta({
  title: 'Noriyuki Shimizu - Frontend Engineer Portfolio',
  description: '清水 紀行のポートフォリオサイト。フロントエンドエンジニアとしてのスキル、経験、プロジェクトを紹介しています。',
  ogTitle: 'Noriyuki Shimizu - Frontend Engineer Portfolio',
  ogDescription: '清水 紀行のポートフォリオサイト。フロントエンドエンジニアとしてのスキル、経験、プロジェクトを紹介しています。',
  ogType: 'website'
})
</script>

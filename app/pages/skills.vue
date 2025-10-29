<script setup lang="ts">
// Meta tags for SEO
useSeoMeta({
  title: 'Skills & Experience - Shiminori Portfolio',
  description: 'Shiminoriの技術スキルと職歴をタイムライン形式で紹介。フロントエンド、バックエンド、DevOpsの経験を詳しく解説しています。',
  ogTitle: 'Skills & Experience - Shiminori Portfolio',
  ogDescription: 'Shiminoriの技術スキルと職歴をタイムライン形式で紹介。フロントエンド、バックエンド、DevOpsの経験を詳しく解説しています。',
  ogType: 'website'
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Skills & Experience
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">これまでの技術的な経験とスキルをタイムライン形式でご紹介します</p>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <div class="max-w-6xl mx-auto">
          <!-- Timeline Container -->
          <div class="relative">
            <!-- Central Line -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"
            ></div>

            <!-- Timeline Items -->
            <div class="space-y-24">
              <!-- Current Position -->
              <div class="relative animate-fade-in-up">
                <div class="flex items-center justify-center">
                  <div
                    class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10 animate-pulse"
                  ></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <!-- Content (Right side on desktop) -->
                  <div class="lg:order-2 lg:pl-16">
                    <div
                      class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div class="flex items-center space-x-3 mb-4">
                        <div class="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                        <span class="text-blue-400 font-semibold text-sm uppercase tracking-wide">2021年4月 〜 現在</span>
                      </div>

                      <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                        官公庁・自治体の入札・落札情報サービス開発
                      </h3>

                      <p class="text-gray-400 mb-6 leading-relaxed">
                        官公庁や自治体などの入札情報や落札情報を提供するサービスのアプリケーション開発をさせていただいております。
                        フロントエンドエンジニアとして、機能拡張・保守をメインに担当させていただいております。
                        現在もこちらの現場でお世話になっております。
                      </p>

                      <div class="space-y-4">
                        <!-- Frontend -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                            フロントエンド
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="Nuxt (v3.x)" color="green" />
                            <TechBadge tech="Vue (v3.x)" color="green" />
                            <TechBadge tech="Chart.js" color="blue" />
                            <TechBadge tech="Playwright" color="purple" />
                          </div>
                        </div>

                        <!-- DevOps -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                              />
                            </svg>
                            DevOps・インフラ
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="Git" color="gray" />
                            <TechBadge tech="Docker" color="blue" />
                            <TechBadge tech="AWS" color="orange" />
                            <TechBadge tech="Terraform" color="purple" />
                            <TechBadge tech="Github Actions" color="gray" />
                            <TechBadge tech="CircleCI" color="green" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Image/Visual (Left side on desktop) -->
                  <div class="lg:order-1 lg:pr-16">
                    <div class="relative group">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      ></div>
                      <div
                        class="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                      >
                        <div class="text-center">
                          <div
                            class="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>
                          </div>
                          <h4 class="text-xl font-semibold text-white mb-2">現在の担当業務</h4>
                          <p class="text-gray-400 text-sm">フロントエンド開発・保守</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Data Analysis System -->
              <div class="relative animate-fade-in-up" style="animation-delay: 0.2s">
                <div class="flex items-center justify-center">
                  <div
                    class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10"
                  ></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <!-- Image/Visual (Right side on desktop) -->
                  <div class="lg:order-2 lg:pl-16">
                    <div class="relative group">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      ></div>
                      <div
                        class="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                      >
                        <div class="text-center">
                          <div
                            class="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          <h4 class="text-xl font-semibold text-white mb-2">データ分析システム</h4>
                          <p class="text-gray-400 text-sm">フルスタック開発</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Content (Left side on desktop) -->
                  <div class="lg:order-1 lg:pr-16">
                    <div
                      class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div class="flex items-center space-x-3 mb-4">
                        <div class="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span class="text-purple-400 font-semibold text-sm uppercase tracking-wide">2020年2月 〜 2021年4月</span>
                      </div>

                      <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        データ分析システムの開発
                      </h3>

                      <p class="text-gray-400 mb-6 leading-relaxed">
                        データの繋がりを可視化するデータ分析システムの開発に携わりました。
                        オンプレのシステムのため、バック・フロント・インフラ等すべての開発に携わりました。
                        e2eテストのひな形構築やi18n対応、バックエンド側のパフォーマンスチューニング等を行いました。
                      </p>

                      <div class="space-y-4">
                        <!-- Backend -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                            バックエンド
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="Java (v11)" color="orange" />
                            <TechBadge tech="Spring Boot (v2.1)" color="green" />
                            <TechBadge tech="Node.js (v12)" color="green" />
                          </div>
                        </div>

                        <!-- Frontend -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                            フロントエンド
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="AngularJS (v8)" color="red" />
                          </div>
                        </div>

                        <!-- Tools -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            ライブラリ・ツール
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="Lucene" color="purple" />
                            <TechBadge tech="Flyway" color="blue" />
                            <TechBadge tech="Lombok" color="green" />
                            <TechBadge tech="Cypress" color="gray" />
                            <TechBadge tech="RxJS" color="pink" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Restaurant Management System -->
              <div class="relative animate-fade-in-up" style="animation-delay: 0.4s">
                <div class="flex items-center justify-center">
                  <div
                    class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full border-4 border-slate-900 z-10"
                  ></div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <!-- Content (Right side on desktop) -->
                  <div class="lg:order-2 lg:pl-16">
                    <div
                      class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div class="flex items-center space-x-3 mb-4">
                        <div class="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
                        <span class="text-pink-400 font-semibold text-sm uppercase tracking-wide">2019年5月 〜 2020年1月</span>
                      </div>

                      <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                        飲食店の注文管理システム開発
                      </h3>

                      <p class="text-gray-400 mb-6 leading-relaxed">
                        飲食店などで用いるタブレットでの注文アプリの管理システム開発に携わりました。 バックエンド側でREST
                        APIの開発をメインに担当させていただきました。
                        単体テスト（UT）の導入を新規でさせていただくなど、貴重な体験をさせていただきました。
                      </p>

                      <div class="space-y-4">
                        <!-- Backend -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                            バックエンド
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="Node.js" color="green" />
                            <TechBadge tech="hapi" color="orange" />
                            <TechBadge tech="PostgreSQL" color="blue" />
                          </div>
                        </div>

                        <!-- Frontend -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                            フロントエンド
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="React.js" color="blue" />
                            <TechBadge tech="Redux" color="purple" />
                          </div>
                        </div>

                        <!-- Cloud -->
                        <div>
                          <h4 class="text-white font-semibold mb-3 flex items-center">
                            <svg class="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                              />
                            </svg>
                            クラウド・インフラ
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <TechBadge tech="AWS Lambda" color="orange" />
                            <TechBadge tech="API Gateway" color="orange" />
                            <TechBadge tech="S3" color="orange" />
                            <TechBadge tech="CodePipeline" color="orange" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Image/Visual (Left side on desktop) -->
                  <div class="lg:order-1 lg:pr-16">
                    <div class="relative group">
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      ></div>
                      <div
                        class="relative bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                      >
                        <div class="text-center">
                          <div
                            class="w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </div>
                          <h4 class="text-xl font-semibold text-white mb-2">レストラン管理</h4>
                          <p class="text-gray-400 text-sm">REST API開発</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Summary -->
    <section class="py-20 bg-white/5 backdrop-blur-sm">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Core Technologies
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend -->
            <div
              class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4">Frontend</h3>
                <div class="space-y-2">
                  <TechBadge tech="Vue.js / Nuxt.js" color="green" />
                  <TechBadge tech="React.js" color="blue" />
                  <TechBadge tech="TypeScript" color="blue" />
                  <TechBadge tech="Tailwind CSS" color="cyan" />
                </div>
              </div>
            </div>

            <!-- Backend -->
            <div
              class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4">Backend</h3>
                <div class="space-y-2">
                  <TechBadge tech="Node.js" color="green" />
                  <TechBadge tech="Java" color="orange" />
                  <TechBadge tech="Spring Boot" color="green" />
                  <TechBadge tech="PostgreSQL" color="blue" />
                </div>
              </div>
            </div>

            <!-- DevOps -->
            <div
              class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-4">DevOps</h3>
                <div class="space-y-2">
                  <TechBadge tech="AWS" color="orange" />
                  <TechBadge tech="Docker" color="blue" />
                  <TechBadge tech="Terraform" color="purple" />
                  <TechBadge tech="GitHub Actions" color="gray" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

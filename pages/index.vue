<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-2xl font-bold text-gray-900">Portfolio</h1>
            </div>
          </div>
          <div class="flex items-center">
            <div class="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#about" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">About</a>
              <a href="#skills" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Skills</a>
              <a href="#projects" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Projects</a>
              <a href="#contact" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section id="about" class="mb-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex justify-center items-center">
              <img
                src="/images/profile-400.webp"
                srcset="/images/profile-200.webp 200w, /images/profile-400.webp 400w, /images/profile-800.webp 800w"
                sizes="(max-width: 768px) 200px,
                       (max-width: 1024px) 400px,
                       800px"
                alt="Profile photo of a person wearing a cap and drinking coffee"
                class="rounded-full w-64 h-64 object-cover"
                width="256"
                height="256"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div>
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-700">氏名</h3>
                  <p class="text-gray-600">清水 紀行</p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-700">生年月日</h3>
                  <p class="text-gray-600">1994年06月12日</p>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-700">私について</h3>
                  <p class="text-gray-600">最新の技術にアンテナを貼り／常に学び続ける姿勢を大切にしています。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Timeline Section -->
      <section id="skills" class="mb-20" aria-labelledby="skills-title">
        <h2 id="skills-title" class="text-3xl font-bold text-gray-900 mb-8">Skills Timeline</h2>
        <!-- <div class="relative"> -->
        <div class="relative bg-white rounded-lg shadow-lg p-8">
          <!-- Timeline Line -->
          <div class="absolute md:left-1/2 left-8 transform md:-translate-x-1/2 h-[calc(100%-4rem)] w-1 bg-gray-200"></div>

          <!-- Timeline Items -->
          <div class="space-y-16">
            <div class="relative" aria-labelledby="backend-title">
              <div class="flex items-start w-full flex-col md:flex-row md:items-center">
                <div class="hidden md:block md:w-1/2 pr-8">
                  <p class="text-gray-600 mb-6">
                    官公庁や自治体などの入札情報や落札情報を提供するサービスのアプリケーション開発をさせていただいております。<br />
                    フロントエンドエンジニアとして、機能拡張・保守をメインに担当させていただいております。<br />
                    現在もこちらの現場でお世話になっております。
                  </p>
                </div>
                <div
                  class="absolute md:left-1/2 left-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  role="presentation"
                ></div>
                <div class="md:w-1/2 w-full pl-6 md:pl-8">
                  <div class="mb-6">
                    <h3 class="text-xl font-semibold mb-2">官公庁・自治体の入札・落札情報サービス開発</h3>
                    <p class="text-gray-600">2021年4月〜現在</p>
                  </div>
                  <p class="md:hidden text-gray-600 mb-6">
                    官公庁や自治体などの入札情報や落札情報を提供するサービスのアプリケーション開発をさせていただいております。<br />
                    フロントエンドエンジニアとして、機能拡張・保守をメインに担当させていただいております。<br />
                    現在もこちらの現場でお世話になっております。
                  </p>
                  <div class="text-left">
                    <h4 id="backend-title" class="text-l font-semibold mb-2">使用技術</h4>
                    <div class="grid grid-cols-1 gap-4">
                      <!-- Frontend -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">フロントエンド</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>Nuxt（v3.x）</li>
                          <li>Vue（v3.x）</li>
                          <li>Chart.js</li>
                          <li>Playwright</li>
                        </ul>
                      </div>

                      <!-- DevOps/Infrastructure -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">DevOps・インフラ</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>Git／Docker／AWS (ECS、ECR、CloudFront、CloudWatch、S3)／Terraform</li>
                          <li>Slack／Github Actions／CircleCI</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative" aria-labelledby="backend-title">
              <div class="flex items-start w-full flex-col md:flex-row md:items-center">
                <div class="hidden md:block md:w-1/2 pr-8">
                  <p class="text-gray-600 mb-6">
                    データの繋がりを可視化するデータ分析システムの開発に携わりました。<br />
                    オンプレのシステムのため、バック・フロント・インフラ等すべての開発に携わりました。<br />
                    e2e テストのひな形構築や／i18n 対応／バックエンド側のパフォーマンスチューニング等を行いました。
                  </p>
                </div>
                <div
                  class="absolute md:left-1/2 left-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  role="presentation"
                ></div>
                <div class="md:w-1/2 w-full pl-6 md:pl-8">
                  <div class="mb-6">
                    <h3 class="text-xl font-semibold mb-2">データ分析システムの開発</h3>
                    <p class="text-gray-600">2020年2月〜2021年4月</p>
                  </div>
                  <p class="md:hidden text-gray-600 mb-6">
                    データの繋がりを可視化するデータ分析システムの開発に携わりました。<br />
                    オンプレのシステムのため、バック・フロント・インフラ等すべての開発に携わりました。<br />
                    e2e テストのひな形構築や／i18n 対応／バックエンド側のパフォーマンスチューニング等を行いました。
                  </p>
                  <div class="text-left">
                    <h4 id="backend-title" class="text-l font-semibold mb-2">使用技術</h4>
                    <div class="grid grid-cols-1 gap-4">
                      <!-- Backend -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">バックエンド</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>Java (v11)</li>
                          <li>Spring Boot (v2.1)</li>
                          <li>Node.js (v12)</li>
                        </ul>
                      </div>

                      <!-- Frontend -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">フロントエンド</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>AngularJS (v8)</li>
                        </ul>
                      </div>

                      <!-- Libraries and Tools -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">ライブラリ・ツール</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>lucene／flyway／lombok</li>
                          <li>Cypress／rxjs／H2</li>
                        </ul>
                      </div>

                      <!-- DevOps/Infrastructure -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">DevOps・インフラ</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>Git／Docker／AWS (EC2)</li>
                          <li>SonarQube／Gradle／Swagger／Slack</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative" aria-labelledby="backend-title">
              <div class="flex items-start w-full flex-col md:flex-row md:items-center">
                <div class="hidden md:block md:w-1/2 pr-8">
                  <p class="text-gray-600 mb-6">
                    飲食店などで用いるタブレットでの注文アプリの管理システム開発に携わりました。<br />
                    バックエンド側で REST API の開発をメインに担当させていただきました。<br />
                    単体テスト（UT）の導入を新規でさせていただくなど、貴重な体験をさせていただきました。
                  </p>
                </div>
                <div
                  class="absolute md:left-1/2 left-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  role="presentation"
                ></div>
                <div class="md:w-1/2 w-full pl-6 md:pl-8">
                  <div class="mb-6">
                    <h3 class="text-xl font-semibold mb-2">飲食店の注文管理システム開発</h3>
                    <p class="text-gray-600">2019年5月〜2020年1月</p>
                  </div>
                  <p class="md:hidden text-gray-600 mb-6">
                    飲食店などで用いるタブレットでの注文アプリの管理システム開発に携わりました。<br />
                    バックエンド側で REST API の開発をメインに担当させていただきました。<br />
                    単体テスト（UT）の導入を新規でさせていただくなど、貴重な体験をさせていただきました。
                  </p>
                  <div class="text-left">
                    <h4 id="backend-title" class="text-l font-semibold mb-2">使用技術</h4>
                    <div class="grid grid-cols-1 gap-4">
                      <!-- Backend -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">バックエンド</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>Node.js</li>
                          <li>hapi</li>
                          <li>PostgreSQL</li>
                        </ul>
                      </div>

                      <!-- Frontend -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">フロントエンド</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>React.js</li>
                          <li>Redux</li>
                        </ul>
                      </div>

                      <!-- DevOps/Infrastructure -->
                      <div>
                        <h5 class="text-gray-700 mb-2 text-sm font-semibold">DevOps・インフラ</h5>
                        <ul class="list-disc list-inside text-gray-600 text-xs">
                          <li>Git／Docker／AWS (s3、Amazon API Gateway、AWS Lambda、CodePipeline)</li>
                          <li>Slack</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative" aria-labelledby="backend-title">
              <div class="flex items-start w-full flex-col md:flex-row md:items-center">
                <div class="hidden md:block md:w-1/2 pr-8">
                  <p class="text-gray-600 mb-6">気が向き次第、記載させていただきます・・・</p>
                </div>
                <div
                  class="absolute md:left-1/2 left-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"
                  role="presentation"
                ></div>
                <div class="md:w-1/2 w-full pl-6 md:pl-8">
                  <div class="mb-6">
                    <h3 class="text-xl font-semibold mb-2">〜省略〜</h3>
                  </div>
                  <p class="md:hidden text-gray-600 mb-6">気が向き次第、記載させていただきます・・・</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Personal Projects Section -->
      <section id="projects" class="mb-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Personal Project</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/article-nuxt3-600x400.webp" alt="Article Nuxt3" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">技術記事閲覧サイト</h3>
              <p class="text-gray-600 mb-4">Qiita／Zenn／note の技術記事を閲覧するためのサイトです。</p>
              <div class="flex justify-between items-center mb-4">
                <NuxtLink
                  to="https://shiminori-tec-articles.onrender.com/"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 font-medium"
                  >View Site →</NuxtLink
                >
              </div>
              <div class="flex justify-between items-center mb-4">
                <NuxtLink
                  href="https://github.com/noriyuki-shimizu/article-nuxt3"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 font-medium"
                  >Repository →</NuxtLink
                >
              </div>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/book-realm-600x400.webp" alt="Article Nuxt3" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Book Realm</h3>
              <p class="text-gray-600 mb-4">
                書籍管理アプリです。<br />
                <NuxtLink to="https://www.npmjs.com/package/@google/generative-ai" target="_blank" class="text-blue-600 hover:text-blue-800"
                  >@google/generative-ai</NuxtLink
                >
                を使用して／画像を解析させ／登録を補助します。 その他／フォームからの入力も行えます。
              </p>
              <div class="flex justify-between items-center mb-4">
                <NuxtLink to="https://book-realm-xi.vercel.app/" target="_blank" class="text-blue-600 hover:text-blue-800 font-medium"
                  >View Site →</NuxtLink
                >
              </div>
              <div class="flex justify-between items-center mb-4">
                <NuxtLink
                  href="https://github.com/noriyuki-shimizu/book-realm"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 font-medium"
                  >Repository →</NuxtLink
                >
              </div>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/front-ui-parts-600x400.webp" alt="Article Nuxt3" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Front UI Parts</h3>
              <p class="text-gray-600 mb-4">
                Vue3 + Vite における UI ライブラリ。<br />
                パッケージ公開を目的とし／業務でも使用できるための練習用として作成したパッケージです。
              </p>
              <div class="flex justify-between items-center mb-4">
                <NuxtLink
                  to="https://noriyuki-shimizu.github.io/front-ui-parts/?path=/docs/data-display-empty--docs"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 font-medium"
                  >View Site →</NuxtLink
                >
              </div>
              <div class="flex justify-between items-center mb-4">
                <NuxtLink
                  href="https://www.npmjs.com/package/front-ui-parts"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 font-medium"
                  >npm Package →</NuxtLink
                >
              </div>
            </div>
          </article>

          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/my-room-600x400.webp" alt="Article Nuxt3" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">My Room</h3>
              <p class="text-gray-600 mb-4">
                Nature Remo の Open API を使用して自身の部屋の温度・湿度・照度の変化をグラフで参照できるサイトです。<br />
                自身でしか参照できない Web アプリとなります。
              </p>
              <div class="flex justify-between items-center mb-4">
                <NuxtLink
                  href="https://github.com/noriyuki-shimizu/remo-web2/tree/main"
                  target="_blank"
                  class="text-blue-600 hover:text-blue-800 font-medium"
                  >Repository →</NuxtLink
                >
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Social Links Section -->
      <section id="contact" class="mb-20">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Connect With Me</h2>
        <div class="flex flex-wrap gap-4">
          <!-- Github -->
          <NuxtLink
            to="https://github.com/noriyuki-shimizu"
            target="_blank"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            aria-label="Contact with me on Github"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </NuxtLink>
          <!-- X -->
          <NuxtLink
            to="https://x.com/smnr14785228"
            target="_blank"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            aria-label="Contact with me on X"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </NuxtLink>
          <!-- Qiita -->
          <NuxtLink
            to="https://qiita.com/shiminori0612"
            target="_blank"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            aria-label="Contact with me on Qiita"
          >
            <svg class="h-8 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 150">
              <rect width="450" height="150" rx="10" fill="#55C500" />

              <g transform="translate(12, 10)" fill="white">
                <circle cx="167.08" cy="21.4" r="12.28"></circle>
                <path d="M250.81 29.66h23.48v18.9h-23.48z"></path>
                <path
                  d="M300.76 105.26a22.23 22.23 0 01-6.26-.86 12.68 12.68 0 01-5.17-3 14.41 14.41 0 01-3.56-5.76 28 28 0 01-1.3-9.22V48.56h29.61v-18.9h-29.52V3.29h-20.17v83.34q0 11.16 2.83 18.27a27.71 27.71 0 007.7 11.2 26.86 26.86 0 0011.43 5.62 47.56 47.56 0 0012.34 1.53h15.16v-18zM0 61.7a58.6 58.6 0 015-24.21A62.26 62.26 0 0118.73 17.9 63.72 63.72 0 0139 4.78 64.93 64.93 0 0164 0a65 65 0 0124.85 4.78 64.24 64.24 0 0120.38 13.12A62 62 0 01123 37.49a58.6 58.6 0 015 24.21 58.34 58.34 0 01-4 21.46 62.8 62.8 0 01-10.91 18.16l11.1 11.1a10.3 10.3 0 010 14.52 10.29 10.29 0 01-14.64 0l-12.22-12.41a65 65 0 01-15.78 6.65 66.32 66.32 0 01-17.55 2.3 64.63 64.63 0 01-45.23-18A62.82 62.82 0 015 85.81 58.3 58.3 0 010 61.7zm21.64.08a43.13 43.13 0 0012.42 30.63 42.23 42.23 0 0013.43 9.09A41.31 41.31 0 0064 104.8a42 42 0 0030-12.39 42.37 42.37 0 009-13.64 43.43 43.43 0 003.3-17 43.77 43.77 0 00-3.3-17A41.7 41.7 0 0080.55 22 41.78 41.78 0 0064 18.68 41.31 41.31 0 0047.49 22a42.37 42.37 0 00-13.43 9.08 43.37 43.37 0 00-12.42 30.7zM331.89 78a47.59 47.59 0 013.3-17.73 43.22 43.22 0 019.34-14.47A44.25 44.25 0 01359 36a47.82 47.82 0 0118.81-3.58 42.72 42.72 0 019.26 1 46.5 46.5 0 018.22 2.58 40 40 0 017 3.84 44.39 44.39 0 015.71 4.63l1.22-9.47h17.35v85.83h-17.35l-1.17-9.42a42.54 42.54 0 01-5.84 4.67 43.11 43.11 0 01-7 3.79 44.86 44.86 0 01-8.17 2.59 43 43 0 01-9.22 1A47.94 47.94 0 01359 119.9a43.3 43.3 0 01-14.47-9.71 44.17 44.17 0 01-9.34-14.47 47 47 0 01-3.3-17.72zm20.27-.08a29.16 29.16 0 002.17 11.34 27 27 0 005.92 8.88 26.69 26.69 0 008.76 5.76 29.19 29.19 0 0021.44 0 26.11 26.11 0 008.72-5.76 27.57 27.57 0 005.88-8.84 29 29 0 002.16-11.38 28.62 28.62 0 00-2.16-11.22 26.57 26.57 0 00-5.93-8.8 27.68 27.68 0 00-19.51-7.9 28.29 28.29 0 00-10.77 2.05 26.19 26.19 0 00-8.71 5.75 27.08 27.08 0 00-5.84 8.8 28.94 28.94 0 00-2.13 11.31zm-194.97-30.5h19.78v73.54h-19.78zm49.25 0h19.78v73.54h-19.78z"
                ></path>
                <circle cx="216.33" cy="21.4" r="12.28"></circle>
              </g>
            </svg>
          </NuxtLink>
          <!-- Zenn -->
          <NuxtLink
            to="https://zenn.dev/shiminori"
            target="_blank"
            class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            aria-label="Contact with me on Zenn"
          >
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z"
                fill="#3EA8FF"
              />
            </svg>
          </NuxtLink>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center text-gray-400">
          <p>&copy; 2025 My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

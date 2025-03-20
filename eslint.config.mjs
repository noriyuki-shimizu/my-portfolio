// @ts-check
import gitignore from 'eslint-config-flat-gitignore'
// @ts-ignore
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import { withNuxt } from './.nuxt/eslint.config.mjs'

export default withNuxt([
  gitignore(),
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      'unused-imports': eslintPluginUnusedImports
    },
    rules: {
      /* eslint */
      'no-restricted-properties': [
        'error',
        {
          property: '$children',
          message: '廃止されたプロパティです'
        },
        {
          property: '$destroy',
          message: '廃止されたメソッドです'
        }
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'vue',
              importNames: ['default'],
              message: '名前付きImportを使用してください'
            }
          ],
          patterns: [
            {
              group: ['**/*.vue'],
              allowImportNames: ['default'],
              message: 'default export を使用してください'
            }
            // TODO: 下記ルールは ESLint の見直しの際に削除する
            // {
            //   group: ['@/composables/*', '@/utils/*'],
            //   message: '自動 import 対象になるので、明示的に import する必要はありません'
            // }
          ]
        }
      ],
      /* import */
      'import/first': 'off',
      'import/no-self-import': 'off',
      /* eslint-plugin-unused-imports */
      'unused-imports/no-unused-imports': 'error',
      // TODO: 下記の設定は enabled にしたい
      'no-console': 'off',
      camelcase: 'off',
      // MEMO: 以下のルールは InjectionKey を props に渡す設計になっており、Symbol の定義が必要なため、disabled にする
      '@typescript-eslint/no-wrapper-object-types': 'off',
      // TODO: 下記ルールは ESLint の見直しの際に削除する
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-constant-binary-expression': 'off',
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  }
])

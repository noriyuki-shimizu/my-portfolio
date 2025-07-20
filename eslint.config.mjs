import eslintConfigPrettier from 'eslint-config-prettier'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import { withNuxt } from './.nuxt/eslint.config.mjs'

/** Vue files */
const VUE_FILES = ['**/*.{jsx,tsx,vue}']

/** All files */
const ALL_FILES = ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}']

/** TypeScript files that require type information */
const TS_FILES = ['**/*.{ts,tsx,cts,mts,vue}']

export default withNuxt([
  /* Vue におけるルールセット */
  {
    files: VUE_FILES,
    rules: {
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
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false, ignores: [] }]
    }
  },
  /* TypeScript で型情報が必要なルールセット */
  {
    files: TS_FILES,
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    rules: {
      '@typescript-eslint/strict-boolean-expressions': [
        'warn',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false
        }
      ]
    }
  },
  /* 全体的なルールセット */
  {
    files: ALL_FILES,
    plugins: {
      jsdoc: jsdocPlugin,
      'unused-imports': eslintPluginUnusedImports
    },
    rules: {
      /* eslint */
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
            },
            {
              group: ['@/composables/*', '@/utils/*'],
              message: '自動 import 対象になるので、明示的に import する必要はありません'
            }
          ]
        }
      ],
      'arrow-body-style': ['error', 'always'],
      /* typescript-eslint */
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: false,
          allowConciseArrowFunctionExpressionsStartingWithVoid: false,
          allowFunctionsWithoutTypeParameters: false,
          allowIIFEs: false,
          allowedNames: []
        }
      ],
      /* JSDoc */
      'jsdoc/require-jsdoc': [
        'error',
        {
          publicOnly: false,
          contexts: [
            'FunctionDeclaration',
            'MethodDefinition',
            'ClassDeclaration',
            'TSPropertySignature',
            'TSTypeAliasDeclaration',
            'TSInterfaceDeclaration',
            'VariableDeclaration[parent.type="Program"]',
            'ExportNamedDeclaration[declaration!=null]'
          ]
        }
      ],
      'jsdoc/require-description': ['error', { descriptionStyle: 'any' }],
      'jsdoc/check-param-names': [
        'error',
        { enableFixer: true, disableMissingParamChecks: true, useDefaultObjectProperties: true }
      ],
      'jsdoc/empty-tags': 'error',
      'jsdoc/no-defaults': 'error',
      'jsdoc/no-multi-asterisks': ['error', { allowWhitespace: true }],
      'jsdoc/require-param': ['error', { checkDestructuredRoots: false }],
      'jsdoc/require-param-name': 'error',
      'jsdoc/require-returns': 'error',
      'jsdoc/require-returns-check': 'error',
      'jsdoc/require-returns-description': 'error',
      'jsdoc/no-types': 'error',
      /* import */
      'import/first': 'off',
      'import/no-self-import': 'off',
      'import/order': [
        'error',
        {
          // TODO: [type] プロパティを追加するかメンバーに相談する
          groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object'],
          pathGroups: [
            {
              pattern: '#*',
              group: 'external',
              position: 'after'
            }
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'external', 'object'],
          distinctGroup: false,
          named: true,
          alphabetize: { order: 'asc' },
          sortTypesGroup: true
        }
      ],
      /* eslint-plugin-unused-imports */
      'unused-imports/no-unused-imports': 'error'
    }
  },
  eslintConfigPrettier,
  /** Prettier と競合しているルールの上書き */
  {
    files: ALL_FILES,
    rules: {
      curly: ['error', 'all']
    }
  }
])

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@pinia/nuxt',
  ],
  ssr: false,
  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css',],
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            'c',
            'cpp',
            'java',
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'shell',
            'mdc',
            'md',
            'yaml',
            'java',
            'go',
            'python',
            'sql',
            'php',
            'dockerfile',
            'toml',
            'ini',
          ],
        },
      },
    },
  },
  ui: {
    fonts: false,
  },
  routeRules: {
    '/': {
      prerender: true,
    },
  },

  compatibilityDate: '2025-01-15',
  nitro: {
    output: {
      publicDir: 'docs', // 生成静态文件到 docs
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'always',
        braceStyle: '1tbs',
      },
    },
  },
},)

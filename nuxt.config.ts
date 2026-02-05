// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],
  ssr: false,
  devtools: {
    enabled: true
  },
  app: {
    baseURL: '/imark-lite/' // ⚠️ 这里必须和仓库名保持一致
  },

  css: ['~/assets/css/main.css'],
  ui: {
    fonts: false
  },
  routeRules: {
    '/': {
      prerender: true
    }
  },

  compatibilityDate: '2025-01-15',
  nitro: {
    output: {
      publicDir: 'docs' // 生成静态文件到 docs
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})

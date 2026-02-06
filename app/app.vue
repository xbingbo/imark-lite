<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1', },
  ],
  link: [
    { rel: 'icon', href: '/favicon.svg', },
  ],
  htmlAttrs: {
    lang: 'en',
  },
},)

const title = 'imark'
const description = '一个为公众号创作者、技术写作者准备的轻量级排版工具'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image',
},)
</script>

<template>
  <UApp>
    <UHeader
      :toggle="false"
      title="IMark"
      to="/"
    >
      <template #right>
        <UTooltip
          :delay-duration="0"
          arrow
          text="开始创作"
        >
          <UButton
            to="/edit"
            icon="i-lucide-circle-play"
            color="neutral"
            variant="ghost"
          />
        </UTooltip>
        <UTooltip
          :delay-duration="0"
          arrow
          text="使用指南"
        >
          <UButton
            to="/docs"
            icon="i-lucide-circle-question-mark"
            color="neutral"
            variant="ghost"
          />
        </UTooltip>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built by ibingbo • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/ebingbo/imark-lite"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>

<template>
  <div>
    <!-- Hero -->
    <UPageHero
      orientation="horizontal"
      title="imark"
      description="一个为公众号创作者和技术写作者准备的轻量级 Markdown 排版工具。专注内容本身，把排版交给它。"
      :links="[
        {
          label: '立即使用',
          to: '/edit',
          trailingIcon: 'i-lucide-arrow-right',
          size: 'xl',
        },
        {
          label: 'GitHub',
          to: 'https://github.com/ebingbo/imark-lite',
          target: '_blank',
          icon: 'i-simple-icons-github',
          size: 'xl',
          color: 'neutral',
          variant: 'subtle',
        },
      ]"
    >
      <UCalendar
        v-model="value"
        size="xl"
      />
    </UPageHero>

    <!-- How it works -->
    <UPageSection
      title="三步完成公众号排版"
      :features="[
        {
          icon: 'i-lucide-edit-3',
          title: '使用 Markdown 写作',
          description: '用你熟悉的 Markdown 专注写内容，不需要额外学习排版规则。',
        },
        {
          icon: 'i-lucide-eye',
          title: '实时预览排版效果',
          description: '所见即所得，提前看到适合公众号阅读的排版样式。',
        },
        {
          icon: 'i-lucide-copy',
          title: '一键复制发布',
          description: '直接复制排版后的内容，粘贴到公众号后台即可发布。',
        },
      ]"
    />

    <!-- Why -->
    <UPageSection
      title="为什么选择 imark"
      :features="[
        {
          icon: 'i-lucide-feather',
          title: '轻量 · 即用',
          description: '无需登录、无需安装，打开网页即可开始排版。',
        },
        {
          icon: 'i-lucide-layout',
          title: '为公众号阅读优化',
          description: '字体、间距、代码块、引用样式，专为公众号阅读体验调整。',
        },
        {
          icon: 'i-lucide-lock',
          title: '数据在本地',
          description: '内容只在浏览器中处理，不上传、不存储，安全可控。',
        },
        {
          icon: 'i-lucide-code',
          title: '完全开源',
          description: '开源透明，可自行部署、二次开发，长期可用无平台依赖。',
        },
      ]"
    />

    <!-- CTA -->
    <UPageSection>
      <UPageCTA
        title="现在就开始排版你的文章"
        description="打开即用，写完直接复制发布。"
        variant="subtle"
        :links="[
          {
            label: '开始写作',
            to: '/edit',
            trailingIcon: 'i-lucide-arrow-right',
          },
        ]"
      />
    </UPageSection>
  </div>
</template>

<script lang="ts" setup>
import { CalendarDate, } from '@internationalized/date'

const date = new Date()
const value = shallowRef(new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate(),),)
</script>

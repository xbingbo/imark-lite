<script lang="ts" setup>
import type { RadioGroupItem, } from '@nuxt/ui'
import IMark from '~/utils/imark'
import { useContextStore, } from '~/stores/context'
import { defaultContent, } from '~/utils/constant'

const items = ref<RadioGroupItem[]>([
  {
    label: '简约白',
    value: 'white',
    description: '留白克制阅读轻松',
  },
  {
    label: '护眼黑',
    value: 'note',
    description: '夜间友好沉浸阅读',
  },
],)
const context = useContextStore()

const doCopy = async () => {
  const htmlContent = IMark.parse(context.markdown,)
  const div = document.createElement('div',)
  div.innerHTML = htmlContent
  const clipboardItem = new ClipboardItem({
    'text/html': new Blob([htmlContent,], { type: 'text/html', },),
    'text/plain': new Blob([div.innerText,], { type: 'text/plain', },),
  },)
  await navigator.clipboard.write([clipboardItem,],)
}
const preview = ref<HTMLIFrameElement | null>(null,)
const htmlContent = computed(() => {
  return IMark.parse(context.markdown,)
},)
watch(htmlContent, (value,) => {
  console.log(value,)
  if (!preview.value) {
    return
  }
  const doc = preview.value.contentDocument
  if (doc) {
    doc.open()
    doc.write(`
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border: 0 solid;
          }
          /* 在这里定义 iframe 内部的所有样式 */
          body {
            margin: 0;
            padding: 10px;
            width: 100%;
            height: 100%;
            overflow-wrap: break-word;  /* 关键属性 */
            word-break: break-word;    /* 双保险 */
          }

        </style>
        <body>${value}</body>
      </html>
    `,)
    doc.close()
  }
}, { immediate: true, },)
onMounted(() => {
  context.markdown = defaultContent
},)
</script>

<template>
  <UContainer>
    <UPageHeader class="py-4">
      <div class="flex flex-row items-center justify-between">
        <URadioGroup
          v-model="context.style"
          orientation="horizontal"
          color="primary"
          variant="table"
          default-value="pro"
          :items="items"
        />
        <UButton
          icon="i-lucide-send"
          size="xl"
          color="primary"
          variant="solid"
          @click="doCopy"
        >
          复制
        </UButton>
      </div>
    </UPageHeader>
    <UPageBody class="flex flex-row gap-4 my-4 py-0 space-y-0">
      <UTextarea
        v-model="context.markdown"
        :maxrows="30"
        :rows="30"
        autoresize
        color="neutral"
        variant="subtle"
        placeholder="Type something..."
        class="w-full"
      />
      <UPageCard
        variant="subtle"
        highlight
        highlight-color="neutral"
        spotlight
        spotlight-color="primary"
        class="w-full"
      >
        <iframe
          ref="preview"
          class="w-full h-full mx-auto"
          sandbox="allow-same-origin allow-scripts allow-presentation"
          srcdoc="<html><body>在这里进行预览</body></html>"
        />
      </UPageCard>
    </UPageBody>
  </UContainer>
</template>

<style scoped>

</style>

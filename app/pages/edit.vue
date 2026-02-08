<script lang="ts" setup>
import type { RadioGroupItem, } from '@nuxt/ui'
import IMark from '~/utils/imark'
import { useContextStore, } from '~/stores/context'
import { defaultContent, } from '~/utils/constant'

const items = ref<RadioGroupItem[]>([
  {
    label: '简约白',
    value: 'white',
    description: '简约留白阅读轻松',
  },
  {
    label: '护眼黑',
    value: 'note',
    description: '夜间友好沉浸阅读',
  },
],)
const context = useContextStore()
const toast = useToast()
const doCopy = async () => {
  const htmlContent = IMark.parse(context.markdown,)
  const div = document.createElement('div',)
  div.innerHTML = htmlContent
  const clipboardItem = new ClipboardItem({
    'text/html': new Blob([htmlContent,], { type: 'text/html', },),
    'text/plain': new Blob([div.innerText,], { type: 'text/plain', },),
  },)
  await navigator.clipboard.write([clipboardItem,],)
  toast.add({
    title: '复制成功',
    description: '现在可以直接粘贴到公众号编辑器里发布了',
    icon: 'i-lucide-circle-check-big',
  },)
}
const preview = ref<HTMLIFrameElement | null>(null,)
const htmlContent = computed(() => {
  return IMark.parse(context.markdown,)
},)
watch(htmlContent, (value,) => {
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
    <UPageBody class="my-4 flex flex-col gap-6 space-y-0 py-0 lg:flex-row">
      <UCard class="editor-card w-full border-slate-200">
        <div class="mb-3 flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-slate-900">
              Markdown编辑
            </div>
            <div class="text-xs text-slate-500">
              支持常用语法，粘贴你的内容即可开始排版
            </div>
          </div>
          <UBadge
            color="primary"
            variant="subtle"
          >
            实时同步
          </UBadge>
        </div>
        <UTextarea
          v-model="context.markdown"
          :maxrows="57"
          :rows="57"
          autoresize
          color="neutral"
          variant="subtle"
          placeholder="在这里输入 Markdown..."
          class="editor-textarea w-full"
        />
      </UCard>

      <UCard class="preview-card w-full border-slate-200">
        <div class="mb-3 flex items-center justify-between">
          <div>
            <div class="text-sm font-semibold text-slate-900">
              公众号预览
            </div>
            <div class="text-xs text-slate-500">
              模拟手机阅读比例，粘贴后更接近真实效果
            </div>
          </div>
          <UBadge
            color="primary"
            variant="subtle"
          >
            手机视图
          </UBadge>
        </div>

        <div class="preview-shell">
          <div class="preview-device">
            <div class="preview-notch" />
            <div class="preview-screen">
              <iframe
                ref="preview"
                class="preview-iframe"
                sandbox="allow-same-origin allow-scripts allow-presentation"
                srcdoc="<html><body>在这里进行预览</body></html>"
              />
            </div>
          </div>
        </div>
      </UCard>
    </UPageBody>
  </UContainer>
</template>

<style scoped>
.editor-card,
.preview-card {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.editor-textarea :deep(textarea) {
  min-height: 520px;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.08);
}

.preview-shell {
  display: flex;
  justify-content: center;
}

.preview-device {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 19;
  border-radius: 32px;
  background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  padding: 14px;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.35);
}

.preview-notch {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 10px;
  border-radius: 999px;
  background: #0b1220;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 2;
}

.preview-screen {
  position: relative;
  height: 100%;
  border-radius: 24px;
  background: #ffffff;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.06);
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>

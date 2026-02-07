<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50/70">
      <div class="absolute -top-20 -right-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
      <div class="absolute top-40 -left-16 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <UContainer class="relative py-16 sm:py-20">
        <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div class="mb-4 flex flex-wrap items-center gap-2">
              <UBadge
                color="primary"
                variant="subtle"
              >
                无需登录
              </UBadge>
              <UBadge
                color="primary"
                variant="subtle"
              >
                本地处理
              </UBadge>
              <UBadge
                color="primary"
                variant="subtle"
              >
                开源可部署
              </UBadge>
            </div>

            <h1 class="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              把 Markdown 变成
              <span class="text-emerald-600">微信公众号可直接粘贴</span>
              的专业排版
            </h1>
            <p class="mt-4 text-lg text-slate-600">
              imark-lite 专注公众号排版细节：标题、列表、引用、代码块样式稳定，粘贴后不乱。
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <UButton
                to="/edit"
                size="xl"
                color="primary"
                trailing-icon="i-lucide-arrow-right"
              >
                立即开始
              </UButton>
            </div>

            <div class="mt-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-500" />
                三步完成发布
              </div>
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-500" />
                公众号样式兼容
              </div>
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-500" />
                即开即用
              </div>
            </div>
          </div>

          <div
            id="preview"
            class="relative"
          >
            <div class="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-emerald-100">
              <div class="mb-4 flex items-center gap-2 text-xs text-slate-500">
                <span class="h-2 w-2 rounded-full bg-rose-400" />
                <span class="h-2 w-2 rounded-full bg-amber-400" />
                <span class="h-2 w-2 rounded-full bg-emerald-400" />
                预览对比
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div class="text-xs font-semibold text-slate-500">
                    Markdown
                  </div>
                  <pre class="mt-2 whitespace-pre-wrap text-sm text-slate-700"># 公众号排版标题

- 要点一
- 要点二

> 引用强调

const hello = 'imark-lite'
                  </pre>
                </div>

                <div class="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                  <div class="text-xs font-semibold text-emerald-700">
                    公众号效果
                  </div>
                  <div class="mt-2 space-y-2 text-sm text-slate-800">
                    <div class="text-base font-semibold">
                      公众号排版标题
                    </div>
                    <ul class="list-disc pl-4">
                      <li>要点一</li>
                      <li>要点二</li>
                    </ul>
                    <div class="rounded-lg border-l-4 border-emerald-400 bg-white p-2 text-slate-600">
                      引用强调
                    </div>
                    <div class="rounded-lg bg-slate-900 px-3 py-2 font-mono text-[12px] text-emerald-200">
                      const hello = 'imark-lite'
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 flex items-center gap-2 text-xs text-slate-500">
                <span class="h-2 w-2 rounded-full bg-emerald-400" />
                复制后可直接粘贴到公众号后台
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Workflow -->
    <section class="bg-white">
      <UContainer class="py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-2xl font-semibold text-slate-900">
            三步完成公众号发布
          </h2>
          <p class="mt-2 text-slate-600">
            只需要写作、预览、复制，流程极简但效果稳定。
          </p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <UCard class="border-slate-200">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                1
              </div>
              <div>
                <div class="text-base font-semibold text-slate-900">
                  粘贴或导入 Markdown
                </div>
                <p class="mt-2 text-sm text-slate-600">
                  保持你熟悉的写作方式，不需要学习新的排版规则。
                </p>
              </div>
            </div>
          </UCard>
          <UCard class="border-slate-200">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                2
              </div>
              <div>
                <div class="text-base font-semibold text-slate-900">
                  选择主题和细节
                </div>
                <p class="mt-2 text-sm text-slate-600">
                  内置简约白、护眼黑、技术蓝等风格，适配公众号阅读。
                </p>
              </div>
            </div>
          </UCard>
          <UCard class="border-slate-200">
            <div class="flex items-start gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                3
              </div>
              <div>
                <div class="text-base font-semibold text-slate-900">
                  一键复制发布
                </div>
                <p class="mt-2 text-sm text-slate-600">
                  复制富文本，粘贴到公众号后台即可完成排版。
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Feature Grid -->
    <section class="bg-slate-50/70">
      <UContainer class="py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-2xl font-semibold text-slate-900">
            为公众号创作者量身打磨
          </h2>
          <p class="mt-2 text-slate-600">
            专注复制粘贴体验，确保内容在公众号里稳定一致。
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              公众号样式兼容
            </div>
            <p class="mt-2 text-sm text-slate-600">
              只使用公众号支持的富文本能力，避免粘贴后样式错乱。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              代码块更清晰
            </div>
            <p class="mt-2 text-sm text-slate-600">
              代码区分层次、对比度更强，阅读舒适。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              列表与引用优化
            </div>
            <p class="mt-2 text-sm text-slate-600">
              间距、缩进、重点引导更符合公众号阅读节奏。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              完全本地处理
            </div>
            <p class="mt-2 text-sm text-slate-600">
              内容不上传、不存储，敏感文章也能放心排版。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              轻量无依赖
            </div>
            <p class="mt-2 text-sm text-slate-600">
              无需插件、无需登录，打开即用。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              开源可二次开发
            </div>
            <p class="mt-2 text-sm text-slate-600">
              开源透明，适合团队内部定制或私有部署。
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Themes -->
    <section class="bg-white">
      <UContainer class="py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-2xl font-semibold text-slate-900">
            三套基础主题，适配不同风格
          </h2>
          <p class="mt-2 text-slate-600">
            轻量但好用，满足长文、技术文档与夜间阅读场景。
          </p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <UCard class="border-slate-200">
            <div class="flex items-center justify-between">
              <div class="text-base font-semibold text-slate-900">
                简约白
              </div>
              <span class="h-2 w-10 rounded-full bg-slate-200" />
            </div>
            <p class="mt-2 text-sm text-slate-600">
              干净克制，适合长文发布与教程文章。
            </p>
          </UCard>
          <UCard class="border-slate-200 bg-slate-900 text-white">
            <div class="flex items-center justify-between">
              <div class="text-base font-semibold text-white">
                护眼黑
              </div>
              <span class="h-2 w-10 rounded-full bg-emerald-400" />
            </div>
            <p class="mt-2 text-sm text-slate-300">
              夜间阅读更友好，强调内容层级。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="flex items-center justify-between">
              <div class="text-base font-semibold text-slate-900">
                技术蓝
              </div>
              <span class="h-2 w-10 rounded-full bg-sky-400" />
            </div>
            <p class="mt-2 text-sm text-slate-600">
              技术风格更鲜明，适合产品更新与工程文章。
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- FAQ -->
    <section class="bg-slate-50/70">
      <UContainer class="py-16">
        <div class="mb-8 max-w-2xl">
          <h2 class="text-2xl font-semibold text-slate-900">
            常见问题
          </h2>
          <p class="mt-2 text-slate-600">
            快速了解使用方式和边界。
          </p>
        </div>
        <div class="grid gap-6 lg:grid-cols-2">
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              支持哪些 Markdown 语法？
            </div>
            <p class="mt-2 text-sm text-slate-600">
              标题、列表、引用、表格、图片与基础代码块已覆盖公众号常用需求。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              是否会上传我的内容？
            </div>
            <p class="mt-2 text-sm text-slate-600">
              不会，所有排版在浏览器本地完成，内容不上传不存储。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              可以私有化部署吗？
            </div>
            <p class="mt-2 text-sm text-slate-600">
              项目开源，可自行部署与二次开发，适合团队内网使用。
            </p>
          </UCard>
          <UCard class="border-slate-200">
            <div class="text-base font-semibold text-slate-900">
              有更复杂的组件吗？
            </div>
            <p class="mt-2 text-sm text-slate-600">
              Lite 版保持轻量，复杂卡片与高级组件会在 Pro 版提供。
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="bg-white">
      <UContainer class="py-16">
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
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const title = 'imark-lite · 微信公众号 Markdown 排版工具'
const description = '把 Markdown 变成微信公众号可直接粘贴的富文本，专注公众号排版细节。'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
},)
</script>

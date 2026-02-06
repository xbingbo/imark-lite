<script lang="ts" setup>
import type {ContentNavigationItem} from "@nuxt/content";

const route = useRoute()

const {data: page} = await useAsyncData(
  () => `content-${route.path}`,
  () => queryCollection('content').path(route.path).first(),
)
if (!page.value) {
  throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})
}

const {data: navigation} = await useAsyncData(() => 'navigation', () => queryCollectionNavigation('content'), {
  transform: (data: ContentNavigationItem[]) => {
    console.log(data)
    const rootResult = data.find(item => item.path === '/docs')?.children || data || []
    return rootResult
  },
})
</script>

<template>
  <UContainer>
    <UPage v-if="page">
      <template #left>
        <UPageAside>
          <UContentNavigation :navigation="navigation"/>
        </UPageAside>
      </template>

      <UPageHeader :title="page.title" :description="page.description"/>
      <UPageBody>
        <ContentRenderer v-if="page" :value="page"/>
      </UPageBody>

      <template v-if="page?.body?.toc?.links?.length" #right>
        <UContentToc :links="page.body.toc.links"/>
      </template>
    </UPage>
  </UContainer>
</template>

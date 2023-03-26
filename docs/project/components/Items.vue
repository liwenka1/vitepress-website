<template>
  <div>
    <h2 v-if="title" :id="formatTitle" tabindex="-1">
      {{ title }}
      <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true">#</a>
    </h2>
    <div class="resourceCard_JSJS" v-for="item in items">
      <h1 style="display: block">{{ item.title }}</h1>
      <span>{{ item.desc }}</span>
      <a
        style="display: block; padding-top: 1vh"
        :href="item.link"
        target="_blank"
        rel="noreferrer"
      >
        点我查看
        <img :src="item.src" style="border-radius: 10px" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'
import type { project } from './type'

const props = defineProps<{
  title: string
  items: project[]
}>()

const formatTitle = computed(() => {
  return slugify(props.title)
})
</script>

<style lang="scss" scoped>
.m-nav-links {
  --gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--gap);
  grid-column-gap: var(--gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--gap);
}

.resourceCard_JSJS {
  background-color: var(--ifm-card-background-color);
  border: 2px solid var(--vp-c-brand-dark);
  border-radius: 8px;
  flex-direction: row;
  height: 50vh;
  width: 75vh;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  padding: 2vh;
  margin-bottom: 2vh;
}
</style>

<script lang="ts" setup>
import { MenuItemWithLink } from '../../core'
import VPSidebarLink from './VPSidebarLink.vue'
import { isActive } from '../support/utils'
import { useData } from 'vitepress'
import { ref, inject, onMounted, watchPostEffect } from 'vue'

const props = defineProps<{
  text: string
  link: string
  items: MenuItemWithLink[]
}>()

const { page } = useData()
function hasActiveLink() {
  const { relativePath } = page.value
  return props.items.some((item) => isActive(relativePath, item.link))
}


// https://github.com/vuejs/theme/issues/97#issuecomment-1666562964
const active = ref(false)
const updateActive = () => {
  active.value = isActive(page.value.relativePath, props.link)
}
onMounted(updateActive)
watchPostEffect(updateActive)
</script>

<template>
  <section class="VPSidebarGroup">
    <div class="title">
      <h2 class="title-text" :class="{ active: hasActiveLink() }">
        <a class="link" :class="{ active:active, pointer:link }" :href="link">
          {{ text }}
        </a>
      </h2>
    </div>

    <template v-for="item in items" :key="item.link">
      <VPSidebarLink :item="item" />
    </template>
  </section>
</template>

<style scoped>
.title {
  padding: 6px 0;
}

@media (min-width: 960px) {
  .title {
    padding: 4px 0;
  }
}

.title-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
}


.link {
  display: block;
  padding: 6px 0;
}

@media (min-width: 960px) {
  .link {
    padding: 4px 0;
  }
}

.pointer{
  cursor: pointer;
}

.link:hover{
  color: var(--vt-c-brand-text-1);
  transition: color 0.25s;
}

.link.active {
  color: var(--vt-c-brand);
  transition: color 0.25s;
}

.link-text {
  line-height: 20px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}
</style>

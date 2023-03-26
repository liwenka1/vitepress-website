---
outline: [2, 3, 4]
---

<script setup>
import Items from './components/Items.vue'

import { PROJECT_DATA } from './data'
</script>
<style></style>

# 开源项目

这些都是我在<a href="https://github.com/liwenka1" target="_blank" rel="noreferrer">GitHub</a>开源并持续维护的项目，如果对你有一点帮助，请给我一个star。

<Items v-for="{title, items} in PROJECT_DATA" :title="title" :items="items" />

<br />
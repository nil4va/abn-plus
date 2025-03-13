<template>
  <div class="show-info">
    <h1 class="show-title">{{ show.name }}</h1>
    <ShowGenres :genres="show.genres" />
    <ShowSummary :summary="show.summary" />
    <ShowMeta :show="show" />
    <ShowLinks :show="show" />
  </div>
</template>

<script setup lang="ts">
import ShowGenres from '@/components/ShowDetail/ShowGenres.vue'
import ShowSummary from '@/components/ShowDetail/ShowSummary.vue'
import ShowMeta from '@/components/ShowDetail/ShowMeta.vue'
import ShowLinks from '@/components/ShowDetail/ShowLinks.vue'
import type { Show } from '@/types/show'

defineProps<{ show: Show }>()
</script>

<style scoped>
.show-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.show-title {
  font-size: 2.5rem;
  margin: 0;
  color: #ffcc00;
}

@media (max-width: 600px) {
  .show-title {
    font-size: 1.5rem;
  }
}
</style>

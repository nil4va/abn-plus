<template>
  <div class="show-meta">
    <div><strong>Rating:</strong> ⭐ {{ show.rating || 'N/A' }}/10</div>
    <div><strong>Runtime:</strong> {{ show.runtime }} min</div>
    <div><strong>Language:</strong> {{ show.language }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show'

defineProps<{ show: Show }>()
</script>

<style scoped>
.show-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 0.9rem;
  color: #ddd;
}

@media (max-width: 600px) {
  .show-meta {
    font-size: 0.8rem;
  }
}
</style>

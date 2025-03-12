<template>
  <div class="show-header">
    <img :src="show.image?.original || show.image?.medium" :alt="show.name" class="show-poster" />
    <ShowInfo :show="show" />
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show'
import ShowInfo from '@/components/ShowDetail/ShowInfo.vue'

defineProps<{ show: Show }>()
</script>

<style scoped>
.show-header {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.show-poster {
  width: 300px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
}

.show-poster:hover {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  .show-header {
    flex-direction: row;
  }
}

@media (max-width: 600px) {
  .show-poster {
    max-width: 100px;
  }
}
</style>

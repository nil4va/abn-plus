<template>
  <div class="show-extra">
    <div><strong>Premiered:</strong> {{ show.premiered }}</div>
    <div><strong>Ended:</strong> {{ show.ended || 'Ongoing' }}</div>
    <div>
      <strong>Schedule:</strong>
      {{ show.schedule?.days.join(', ') }} at {{ show.schedule?.time }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show'

defineProps<{ show: Show }>()
</script>

<style scoped>
.show-extra {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 0.9rem;
  color: #ccc;
}

@media (max-width: 600px) {
  .show-extra {
    font-size: 0.8rem;
  }
}
</style>

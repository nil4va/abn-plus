<template>
  <div class="show-detail-container">
    <ShowHeader :show="show" />
    <ShowExtra :show="show" />
  </div>
</template>

<script setup lang="ts">
import ShowHeader from '@/components/ShowDetail/ShowHeader.vue'
import ShowExtra from '@/components/ShowDetail/ShowExtra.vue'
import type { Show } from '@/types/show'

defineProps<{ show: Show }>()
</script>

<style scoped>
.show-detail-container {
  max-width: 1000px;
  margin: 40px auto;
  background: linear-gradient(135deg, #1f1c2c, #928dab);
  border-radius: 1rem;
  color: #fff;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  justify-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
}

.show-detail-container:hover {
  transform: translateY(-5px);
}
</style>

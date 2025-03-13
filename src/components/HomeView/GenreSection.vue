<template>
  <div class="genre-section">
    <h2 class="genre-title">{{ genre }}</h2>
    <div class="shows-row">
      <ShowCard v-for="show in shows" :key="show.id" :show="show" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowCard from './ShowCard.vue'
import type { Show } from '../../types/show'

defineProps<{
  genre: string
  shows: Show[]
}>()
</script>

<style scoped>
.genre-section {
  margin-bottom: 40px;
}

.genre-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
}

.shows-row {
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding-bottom: 10px;
}

.shows-row::-webkit-scrollbar {
  display: none;
}
</style>

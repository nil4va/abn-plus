<template>
  <h2 class="genre-title">{{ genre }}</h2>
  <div class="shows-row">
    <ShowCard v-for="show in shows" :key="show.id" :show="show" />
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
.genre-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.shows-row {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
}

.shows-row::-webkit-scrollbar {
  display: none;
}
</style>

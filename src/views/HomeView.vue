<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useFetchShows } from '../composables/useFetchShows'
import type { Show } from '../types/show'

import GenreSection from '@/components/GenreSection.vue'
import SortOptions from '@/components/SortOptions.vue'

const { fetchShows, showsByGenre } = useFetchShows()
const selectedSort = ref('ratingHighLow')

const sortedGenres = computed(() => {
  const sorted: Record<string, Show[]> = {}

  Object.keys(showsByGenre.value).forEach((genre) => {
    const sortedShows = [...showsByGenre.value[genre]]

    sortedShows.sort((a, b) => {
      switch (selectedSort.value) {
        case 'ratingHighLow':
          return (b.rating.average || 0) - (a.rating.average || 0)
        case 'ratingLowHigh':
          return (a.rating.average || 0) - (b.rating.average || 0)
        case 'nameAZ':
          return a.name.localeCompare(b.name)
        case 'nameZA':
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })

    sorted[genre] = sortedShows
  })

  return sorted
})

onMounted(async () => {
  await fetchShows()
})
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>Welcome to ABN+</h1>
      <div class="bottom-header">
        <h3>Discover your next favorite show</h3>
        <SortOptions v-model:selectedSort="selectedSort" />
      </div>
    </header>

    <div v-for="(shows, genre) in sortedGenres" :key="genre">
      <GenreSection :genre="genre" :shows="shows" />
    </div>
  </div>
</template>

<style scoped>
.app {
  background-color: #141414;
  min-height: 100vh;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bottom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 3rem;
}

.header h3 {
  font-weight: 400;
  margin: 0;
}
</style>

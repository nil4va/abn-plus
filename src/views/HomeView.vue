<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useFetchShows } from '../composables/useFetchShows'
import type { Show } from '../types/show'

import GenreSection from '@/components/GenreSection.vue'
import SortOptions from '@/components/SortOptions.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useShowSearch } from '@/composables/useShowSearch'
import { useSearchStore } from '@/stores/useSearchStore'

const { showsByGenre } = useFetchShows()
const { searchShows } = useShowSearch()
const searchStore = useSearchStore()

const selectedSort = ref('ratingHighLow')
const query = ref(searchStore.query)
const filteredShows = ref<Show[]>([])

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

watchEffect(async () => {
  try {
    if (query.value) {
      await searchShows(query.value)
    }
  } catch (error) {
    console.error('Error during search:', error)
  }
})

const updateFilteredShows = (newFilteredShows: Show[]) => {
  filteredShows.value = newFilteredShows
}
</script>

<template>
  <div class="app">
    <header class="header">
      <div class="top-header">
        <h1>Welcome to ABN+</h1>
        <SortOptions v-model:selectedSort="selectedSort" />
      </div>
      <div class="bottom-header">
        <h3>Discover your next favorite show</h3>
        <SearchBar v-model:query="query" @updateFilteredShows="updateFilteredShows" />
      </div>
    </header>

    <main>
      <div>
        <div v-if="query && filteredShows.length > 0" class="filtered-shows-section">
          <GenreSection genre="Search Results:" :shows="filteredShows" />
        </div>
        <div v-if="query && filteredShows.length === 0">
          <p>No shows found.</p>
        </div>
      </div>

      <div v-for="(shows, genre) in sortedGenres" :key="genre" class="genre-section-container">
        <GenreSection :genre="genre" :shows="shows" />
      </div>
    </main>
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

.bottom-header,
.top-header {
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

.filtered-shows-section {
  margin-bottom: 20px;
  background-color: #1f1f1f;
  border-radius: 20px;
  padding: 10px 20px;
}

.genre-section-container {
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .header h1 {
    font-size: 1.2rem;
  }

  .header h3 {
    display: none;
  }

  .bottom-header {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }

  .bottom-header > * {
    flex: 1;
    min-width: 0;
  }

  .app {
    padding: 5px;
  }
}
</style>

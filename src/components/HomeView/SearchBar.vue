<template>
  <div>
    <div>
      <input
        v-model="localQuery"
        @input="updateQuery"
        type="text"
        id="search"
        placeholder="Search for a show"
        class="search-input"
      />

      <div v-if="isLoading" class="loading">Loading...</div>
      <div v-if="localQuery && !isLoading && !error && showsResult.length === 0" class="no-results">
        No shows found
      </div>

      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useShowSearch } from '@/composables/useShowSearch'
import { useSearchStore } from '@/stores/useSearchStore'
import type { Show } from '@/types/show'
import debounce from 'lodash/debounce'

const searchStore = useSearchStore()
const { showsResult, isLoading, error, searchShows } = useShowSearch()

const localQuery = ref(searchStore.query)

const emit = defineEmits(['updateFilteredShows', 'update:query'])

const updateQuery = () => {
  emit('update:query', localQuery.value)
  searchStore.setQuery(localQuery.value)
}

const debouncedSearch = debounce(async (newQuery: string) => {
  await searchShows(newQuery)

  searchStore.setShowsResult(showsResult.value)
  searchStore.setLoading(false)

  if (showsResult.value.length > 0) {
    const filteredShows = showsResult.value.map((item: Show) => item)
    emit('updateFilteredShows', filteredShows)
  }
}, 400)

watch(localQuery, (newQuery) => {
  debouncedSearch(newQuery)
})

if (searchStore.showsResult.length > 0) {
  emit('updateFilteredShows', searchStore.showsResult)
}
</script>

<style scoped>
.search-input {
  appearance: none;
  background-color: #2c2c2c;
  color: #f0f0f0;
  padding: 0.625rem 2.5rem 0.625rem 0.9375rem;
  font-size: 1rem;
  border: 0.0625rem solid #444;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  min-width: 15.625rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
}

.search-input:hover {
  border-color: #888;
}

.search-input:focus {
  outline: none;
  border-color: #888;
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.3);
}

.loading,
.error {
  color: #f0f0f0;
  margin-top: 0.625rem;
}

.no-results {
  color: #f0f0f0;
  margin-top: 0.625rem;
  font-size: 1rem;
  font-style: italic;
}
</style>

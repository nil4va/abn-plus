<template>
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
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="!isLoading && shows.length">
      <li v-for="show in shows" :key="show.id">
        <h3>{{ show.name }}</h3>
        <p>{{ show.genres.join(', ') }}</p>
      </li>
    </ul>
    <div v-else-if="!isLoading && !shows.length && localQuery.length">No results found</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useShowSearch } from '@/composables/useShowSearch'

const localQuery = ref('')

const { shows, isLoading, error } = useShowSearch()

const emit = defineEmits(['update:query'])

const updateQuery = () => {
  emit('update:query', localQuery.value)
}
</script>

<style scoped>
.search-input {
  appearance: none;
  background-color: #2c2c2c;
  color: #f0f0f0;
  padding: 10px 40px 10px 15px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  min-width: 250px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.search-input::placeholder {
  color: #888;
}

.search-input:hover {
  border-color: #888;
}

.search-input:focus {
  outline: none;
  border-color: #888;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

.loading,
.error {
  color: #f0f0f0;
  margin-top: 10px;
}

.error {
  color: red;
}

ul {
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #444;
  color: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
}

a {
  color: #4f87f7;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .search-container {
    gap: 10px;
  }

  .search-input {
    min-width: 150px;
    font-size: 0.9rem;
    padding: 8px 35px 8px 12px;
  }

  .search-label {
    font-size: 0.9rem;
  }
}
</style>

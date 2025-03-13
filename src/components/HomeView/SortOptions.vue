<template>
  <div class="sort-container">
    <label for="sort">Sort:</label>
    <select :value="props.selectedSort" @change="handleChange" id="sort" class="sort-dropdown">
      <option disabled value="">-- Select --</option>
      <option value="ratingHighLow">Rating: High → Low</option>
      <option value="ratingLowHigh">Rating: Low → High</option>
      <option value="nameAZ">Name: A → Z</option>
      <option value="nameZA">Name: Z → A</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  selectedSort: string
}>()

const emit = defineEmits(['update:selectedSort'])

const handleChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value
  if (value !== props.selectedSort) {
    emit('update:selectedSort', value)
  }
}
</script>

<style scoped>
.sort-container {
  display: flex;
  align-items: center;
  position: relative;
}

.sort-container::after {
  content: '▼';
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #f0f0f0;
  pointer-events: none;
  font-size: 0.8rem;
}

.sort-container label {
  font-weight: 500;
  margin-right: 1rem;
  color: #f0f0f0;
}

.sort-dropdown {
  appearance: none;
  background-color: #2c2c2c;
  color: #f0f0f0;
  padding: 1rem;
  font-size: 1rem;
  border: 0.0625rem solid #444;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-width: 12.5rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.3);
}

.sort-dropdown:hover {
  border-color: #888;
}

.sort-dropdown:focus {
  outline: none;
  border-color: #888;
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.3);
}

@media (max-width: 37.5rem) {
  .sort-container {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .sort-dropdown {
    min-width: 9.375rem;
    font-size: 0.9rem;
    padding: 1rem;
  }

  label {
    display: none !important;
  }

  .sort-container::after {
    content: '';
  }
}
</style>

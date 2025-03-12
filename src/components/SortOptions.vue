<template>
  <div class="sort-container">
    <label for="sort">Sort by:</label>
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
  emit('update:selectedSort', value)
}
</script>

<style scoped>
.sort-container {
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
}
.sort-container::after {
  content: '▼';
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #f0f0f0;
  pointer-events: none;
  font-size: 0.8rem;
}
.sort-container label {
  font-weight: 500;
  margin-right: 10px;
  color: #f0f0f0;
}
.sort-dropdown {
  appearance: none;
  background-color: #2c2c2c;
  color: #f0f0f0;
  padding: 10px 40px 10px 15px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  min-width: 200px;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.sort-dropdown:hover {
  border-color: #888;
}
.sort-dropdown:focus {
  outline: none;
  border-color: #888;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

@media (max-width: 600px) {
  .sort-container {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }

  .sort-dropdown {
    min-width: 150px;
    font-size: 0.9rem;
    padding: 8px 35px 8px 12px;
  }

  .sort-container label {
    font-size: 0.9rem;
  }

  label {
    display: none !important;
  }

  .sort-container::after {
    content: '';
  }
}
</style>

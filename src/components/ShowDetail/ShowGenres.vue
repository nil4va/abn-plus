<template>
  <div class="genres">
    <span v-for="genre in genres" :key="genre" class="genre">{{ genre }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ genres: string[] }>()
</script>

<style scoped>
.genres {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.genre {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.063rem;
}

@media (max-width: 600px) {
  .genres {
    gap: 8px;
  }

  .genre {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
}
</style>

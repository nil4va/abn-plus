<template>
  <div class="show-card">
    <img
      :src="show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'"
      :alt="show.name"
    />
    <div class="show-info">
      <h3 class="show-name">{{ show.name }}</h3>
      <p class="show-rating">⭐ {{ show.rating.average || 'N/A' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: {
    id: number
    name: string
    rating: { average: number | null }
    image: { medium: string } | null
  }
}>()
</script>

<style scoped>
.show-card {
  flex: 0 0 auto;
  width: 210px;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.show-card:hover {
  transform: scale(1.05);
}
.show-card img {
  width: 100%;
  height: 295px;
  object-fit: cover;
}
.show-info {
  padding: 10px;
}
.show-name {
  font-size: 1rem;
  margin: 0;
}
.show-rating {
  font-size: 0.9rem;
  color: #bbb;
}
</style>

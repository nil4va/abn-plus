<script setup lang="ts">
import type { Show } from '../../types/show'
import noImage from '@/assets/No-Image-Placeholder.png'

defineProps<{
  show: Show
}>()
</script>

<template>
  <router-link :to="{ name: 'show', params: { id: show.id } }" class="show-card-link">
    <div class="show-card">
      <img :src="show.image?.medium || noImage" :alt="show.name" />
      <div class="show-info">
        <h3 class="show-name">{{ show.name }}</h3>
        <p class="show-rating">⭐ {{ show.rating.average || 'N/A' }}</p>
      </div>
    </div>
  </router-link>
</template>

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

.show-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

@media (max-width: 600px) {
  .show-card {
    width: 100px;
    height: 100%;
  }

  .show-card img {
    height: 100px;
  }

  .show-name {
    font-size: 0.9rem;
  }

  .show-rating {
    font-size: 0.8rem;
  }

  .show-card-link {
    padding: 0;
    bottom: 0;
  }
}
</style>

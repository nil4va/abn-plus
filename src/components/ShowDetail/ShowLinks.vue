<template>
  <div class="show-links">
    <a :href="show.officialSite || show.url" target="_blank" class="btn primary">
      Visit Official Site
    </a>

    <a
      v-if="show.network?.officialSite"
      :href="show.network.officialSite"
      target="_blank"
      class="btn secondary"
    >
      Watch on {{ show.network.name }}
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types/show'

defineProps<{ show: Show }>()
</script>

<style scoped>
.show-links {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.btn.primary {
  background-color: #ffcc00;
  color: #000;
}

.btn.primary:hover {
  background-color: #e6b800;
  transform: translateY(-2px);
}

.btn.secondary {
  background-color: #555;
  color: #fff;
}

.btn.secondary:hover {
  background-color: #777;
  transform: translateY(-2px);
}

@media (max-width: 600px) {
  .show-links {
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
  }
}
</style>

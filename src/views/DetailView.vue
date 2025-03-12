<template>
  <div class="show-detail-container-wrapper">
    <div v-if="show">
      <ShowDetailContainer :show="show" />
    </div>
    <div v-else class="loading">Loading show details...</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useFetchShows } from '@/composables/useFetchShows'
import ShowDetailContainer from '../components/ShowDetail/ShowDetailContainer.vue'

const props = defineProps<{ id: number }>()

const { showsByGenre } = useFetchShows()

const allShows = computed(() => Object.values(showsByGenre.value).flat())

const show = computed(() => allShows.value.find((s) => s.id === props.id))
</script>

<style scoped>
.show-detail-container-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading {
  text-align: center;
  color: #aaa;
  padding: 50px 0;
}
</style>

<template>
  <div class="show-detail-container-wrapper">
    <button id="return" @click="router.push('/')">➜</button>
    <div v-if="show">
      <ShowDetailContainer :show="show" />
    </div>
    <div v-else class="loading">Loading show details...</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useFetchShows } from '@/composables/useFetchShows'
import ShowDetailContainer from '../components/ShowDetail/ShowDetailContainer.vue'
import type { Show } from '@/types/show'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{ id: number }>()

const show = ref<Show | null>(null)

const { showsByGenre, fetchById, loading } = useFetchShows()

const allShows = computed(() => Object.values(showsByGenre.value).flat())

const localShow = computed(() => allShows.value.find((s) => s.id === props.id))

watchEffect(async () => {
  if (localShow.value) {
    show.value = localShow.value
  } else if (!loading.value && !show.value) {
    const fetchedShow = await fetchById(props.id)
    if (fetchedShow) {
      show.value = fetchedShow
    }
  }
})
</script>

<style scoped>
.show-detail-container-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#return {
  font-size: 5rem;
  color: gray;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 2rem;
  transform: rotate(180deg);
}

#return:hover {
  transform: scale(1.05) rotate(180deg);
}

.loading {
  text-align: center;
  color: #aaa;
  padding: 50px 0;
}
</style>

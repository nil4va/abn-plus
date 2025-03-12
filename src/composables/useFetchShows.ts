import { ref, computed, onMounted, type Ref } from 'vue'
import { fetchAllShows, fetchShowById } from '../services/api'
import type { Show } from '../types/show'

export function useFetchShows() {
  const shows = ref<Show[]>([])
  const show = ref<Show>()
  const loading = ref(true)
  const error: Ref<null | unknown> = ref(null)

  const fetchShows = async () => {
    loading.value = true
    try {
      const response = await fetchAllShows()
      shows.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const fetchById = async (id: number) => {
    loading.value = true
    try {
      const response = await fetchShowById(id)
      show.value = response.data
      return show.value
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const showsByGenre = computed(() => {
    const grouped: Record<string, typeof shows.value> = {}

    shows.value.forEach((show) => {
      show.genres.forEach((genre) => {
        if (!grouped[genre]) {
          grouped[genre] = []
        }
        grouped[genre].push(show)
      })
    })

    return grouped
  })

  onMounted(fetchShows)

  return { fetchShows, shows, showsByGenre, loading, error, fetchById }
}

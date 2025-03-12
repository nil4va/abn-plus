import { ref, type Ref } from 'vue'
import { searchShowsByName } from '../services/api'
import type { Show } from '../types/show'

export const useShowSearch = () => {
  const shows = ref<Show[]>([])
  const isLoading = ref(false)
  const error: Ref<null | unknown> = ref(null)

  const searchShows = async (query: string) => {
    if (!query) return
    isLoading.value = true
    error.value = ''
    try {
      const response = await searchShowsByName(query)
      shows.value = response.data
    } catch (err) {
      error.value = 'An error occurred while searching shows.'
    } finally {
      isLoading.value = false
    }
  }

  return {
    shows,
    isLoading,
    error,
    searchShows,
  }
}

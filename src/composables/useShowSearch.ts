import { ref, type Ref } from 'vue'
import { searchShowsByName } from '../services/api'
import type { Show } from '../types/show'
import type { ShowData } from '../types/showData'

export const useShowSearch = () => {
  const showsResult = ref<Show[]>([])
  const isLoading = ref(false)
  const error: Ref<null | unknown> = ref(null)

  const searchShows = async (query: string) => {
    if (!query) return
    isLoading.value = true
    error.value = ''
    try {
      const response = await searchShowsByName(query)
      showsResult.value = response.data.map((result: ShowData) => result.show)
    } catch (err) {
      error.value = 'An error occurred while searching shows.'
    } finally {
      isLoading.value = false
    }
  }

  return {
    showsResult,
    isLoading,
    error,
    searchShows,
  }
}

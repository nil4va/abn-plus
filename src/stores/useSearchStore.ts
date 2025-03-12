import { defineStore } from 'pinia'
import type { Show } from '../types/show'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: '',
    showsResult: [] as Show[],
    isLoading: false,
  }),
  actions: {
    setQuery(query: string) {
      this.query = query
    },
    setShowsResult(shows: Show[]) {
      this.showsResult = shows
    },
    setLoading(loading: boolean) {
      this.isLoading = loading
    },
  },
})

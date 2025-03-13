import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchBar from '@/components/HomeView/SearchBar.vue'
import { useShowSearch } from '@/composables/useShowSearch'
import { useSearchStore } from '@/stores/useSearchStore'
import type { Show } from '../../types/show'

interface MockSearchStore {
  query: string
  showsResult: Show[]
  isLoading: boolean
  setQuery: (query: string) => void
  setShowsResult: (shows: Show[]) => void
  setLoading: (loading: boolean) => void
}

interface MockUseShowSearch {
  showsResult: { value: Show[] }
  isLoading: boolean
  error: string | null
  searchShows: (query: string) => void
}

vi.mock('@/composables/useShowSearch', () => ({
  useShowSearch: vi.fn(),
}))

vi.mock('@/stores/useSearchStore', () => ({
  useSearchStore: vi.fn(),
}))

describe('SearchBar', () => {
  let mockSearchStore: MockSearchStore
  let mockUseShowSearch: MockUseShowSearch

  beforeEach(() => {
    mockSearchStore = {
      query: '',
      showsResult: [],
      isLoading: false,
      setQuery: vi.fn(),
      setShowsResult: vi.fn(),
      setLoading: vi.fn(),
    }

    mockUseShowSearch = {
      showsResult: { value: [] },
      isLoading: false,
      error: null,
      searchShows: vi.fn(),
    }
    ;(useShowSearch as Mock).mockReturnValue(mockUseShowSearch)
    ;(useSearchStore as unknown as Mock).mockReturnValue(mockSearchStore)
  })

  it('updates query on input and emits update:query', async () => {
    const wrapper = mount(SearchBar)

    const input = wrapper.get('input#search')
    await input.setValue('Breaking Bad')

    expect(mockSearchStore.setQuery).toHaveBeenCalledWith('Breaking Bad')
    expect(wrapper.emitted('update:query')).toBeTruthy()
    expect(wrapper.emitted('update:query')![0]).toEqual(['Breaking Bad'])
  })

  it('displays loading indicator when isLoading is true', async () => {
    mockUseShowSearch.isLoading = true

    const wrapper = mount(SearchBar)

    expect(wrapper.find('.loading').exists()).toBe(true)
    expect(wrapper.find('.loading').text()).toBe('Loading...')
  })

  it('does NOT display loading indicator when isLoading is false', async () => {
    mockUseShowSearch.isLoading = false

    const wrapper = mount(SearchBar)

    expect(wrapper.find('.loading').exists()).toBe(false)
  })

  it('displays error message when error exists', async () => {
    mockUseShowSearch.error = 'Something went wrong'

    const wrapper = mount(SearchBar)

    expect(wrapper.find('.error').exists()).toBe(true)
    expect(wrapper.find('.error').text()).toBe('Something went wrong')
  })

  it('emits updateFilteredShows when showsResult has items', async () => {
    vi.useFakeTimers()

    const shows: Show[] = [
      {
        id: 1,
        name: 'Breaking Bad',
        genres: ['Drama'],
        image: { medium: '', original: '' },
        url: '',
        summary: '',
        language: '',
        status: '',
        premiered: '',
        ended: '',
        schedule: { time: '', days: [] },
        rating: { average: null },
        network: null,
        officialSite: null,
        runtime: null,
      },
    ]
    mockUseShowSearch.showsResult.value = shows

    const wrapper = mount(SearchBar)

    const input = wrapper.get('input#search')
    await input.setValue('Breaking')

    vi.advanceTimersByTime(400)

    await wrapper.vm.$nextTick()

    await Promise.resolve()
    await wrapper.vm.$nextTick()

    expect(mockUseShowSearch.searchShows).toHaveBeenCalledWith('Breaking')
    expect(mockSearchStore.setShowsResult).toHaveBeenCalledWith(shows)
    expect(mockSearchStore.setLoading).toHaveBeenCalledWith(false)

    expect(wrapper.emitted('updateFilteredShows')).toBeTruthy()
    expect(wrapper.emitted('updateFilteredShows')![0]).toEqual([shows])

    vi.useRealTimers()
  })

  it('renders input field with placeholder', () => {
    const wrapper = mount(SearchBar)

    const input = wrapper.get('input#search')
    expect(input.attributes('placeholder')).toBe('Search for a show')
  })
})

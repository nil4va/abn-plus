import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.tvmaze.com',
})

export const fetchAllShows = () => api.get('/shows')

export const fetchShowById = (id: number) => api.get(`/shows/${id}`)

export const searchShowsByName = (query: string) => api.get(`/search/shows?q=${query}`)

export default api

export type Show = {
  id: number
  name: string
  genres: string[]
  image: {
    medium: string
    original: string
  }
  rating: {
    average: number
  }
}

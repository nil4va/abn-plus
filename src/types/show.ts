export type Show = {
  id: number
  name: string
  genres: string[]
  language: string
  status: string
  runtime: number | null
  premiered: string | null
  ended: string | null
  summary: string
  officialSite: string | null

  schedule: {
    time: string
    days: string[]
  }

  rating: {
    average: number | null
  }

  image: {
    medium: string
    original: string
  } | null

  network: {
    name: string
    officialSite: string | null
  } | null

  url: string
}

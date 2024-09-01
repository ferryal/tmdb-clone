const baseUrl: string = "https://api.themoviedb.org/3"

const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.TMDB_KEY}`,
}

const defaultParams: Record<string, string> = {
  language: "en-US",
}

const apiConfig: {
  baseUrl: string
  defaultHeaders: Record<string, string>
  defaultParams: Record<string, string>
} = {
  baseUrl,
  defaultHeaders,
  defaultParams,
}

export default apiConfig

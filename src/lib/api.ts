import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  params: {
    apikey: import.meta.env.VITE_PUBLIC_KEY_API,
  },
})

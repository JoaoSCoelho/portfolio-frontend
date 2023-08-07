import axios from 'axios'

export const apiDefaults = {
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
}

const api = axios.create(apiDefaults)

export default api

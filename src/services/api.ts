import axios from 'axios'

export const apiDefaults = {
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
}

const api = axios.create(apiDefaults)

api.interceptors.request.use((config) => {
  config.headers['request-startTime'] = Date.now()
  return config
})

api.interceptors.response.use(
  (response) => {
    const start = response.config.headers['request-startTime']
    const end = Date.now()
    const milliseconds = end - start
    response.headers['request-duration'] = milliseconds
    return response
  },
  (error) => {
    if (error.response) {
      const start = error.response.config.headers['request-startTime']
      const end = Date.now()
      const milliseconds = end - start
      error.response.headers['request-duration'] = milliseconds
    }

    return Promise.reject(error)
  },
)

export default api

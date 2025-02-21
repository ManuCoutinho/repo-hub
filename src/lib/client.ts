import axios, { type AxiosInstance } from 'axios'

const token = process.env.GH_SECRET

function setupApiClient(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.API_URL
  })

  api.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = `Bearer ${token}`
      config.headers.Accept = 'application/vnd.github+json'
      config.headers['X-GitHub-Api-Version'] = '2022-11-28'
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  return api
}

const clientInstance = setupApiClient()
export default clientInstance

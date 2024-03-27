import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export const client: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
})

client.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error),
)

client.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

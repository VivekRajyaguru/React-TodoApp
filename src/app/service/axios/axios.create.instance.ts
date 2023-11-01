import axios, {AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios'

// Create an Axios instance with custom configuration
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
  // headers: {
  //   "Content-Type": "application/json",
  //   "x-api-key": process.env.X_API_KEY,
  // },
})

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance

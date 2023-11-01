import {AxiosError} from 'axios'
import axiosInstance from './axios.create.instance'

const BASE_URL = process.env.REACT_APP_API_BASE_URL

// Define a function to handle errors
const handleRequestError = async (error: AxiosError) => {
  if (error.response) {
    console.error('Request failed with status code:', error.response.status)
    console.error('Response data:', error.response.data)
  } else if (error.request) {
    console.error('No response received. Request:', error.request)
  } else {
    console.error('Error setting up the request:', error.message)
  }
  return Promise.reject(error)
}

// Define a function to handle errors
// const handleResponse = (response: AxiosResponse) => {
//   if (response.status >= 200 && response.status < 300) {
//     // Successful response
//     console.log("Response data:", response.data);
//     return response.data;
//   }
//   // Response indicates an error
//   console.error("Request failed with status code:", response.status);
//   console.error("Response data:", response.data);
//   return Promise.reject(response);
// };
const createSearchParams = (queryParameters) => {
  const searchParams = new URLSearchParams()

  for (const key in queryParameters) {
    if (queryParameters.hasOwnProperty(key)) {
      searchParams.append(key, queryParameters[key])
    }
  }

  return searchParams.toString()
}

// Define a common service object
const commonAPIService = {
  get: async (url: string, queryParameters?: any, config?: any) => {
    try {
      if (queryParameters) {
        const params = createSearchParams(queryParameters)
        url = `${url}?${params.toString()}`
      }
      const response = await axiosInstance.get(`${BASE_URL}${url}`, config)
      return response.data
    } catch (error: any) {
      return handleRequestError(error)
    }
  },

  put: async (url: string, data: any, config?: any) => {
    try {
      const response = await axiosInstance.put(`${BASE_URL}${url}`, data, config)
      return response.data
    } catch (error: any) {
      return handleRequestError(error)
    }
  },

  post: async (url: string, data: any, config?: any) => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}${url}`, data, config)
      return response.data
    } catch (error: any) {
      return handleRequestError(error)
    }
  },

  delete: async (url: string, config?: any) => {
    try {
      const response = await axiosInstance.delete(`${BASE_URL}${url}`, config)
      return response.data
    } catch (error: any) {
      return handleRequestError(error)
    }
  },
}

export default commonAPIService

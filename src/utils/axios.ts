import axios from 'axios'

export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'update' | 'UPDATE'

export const axiosApi = (url: string, method: Method = 'GET', data: any, options: any) => {
  data = method.toUpperCase() === 'GET' ? { params: {...data} } : { data }
  const defaultConfig = {
    url,
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  const config = {
    ...defaultConfig,
    ...data,
    ...options
  }

  return axios(config)
    .then(response => response)
}

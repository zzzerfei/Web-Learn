import YHRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import { YHRequestConfig } from './request/type'

const yhRequest = new YHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: YHRequestConfig) => {
      // 携带 token 的拦截
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default yhRequest

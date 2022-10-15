import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YHRequestIntercrptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface YHRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YHRequestIntercrptors<T>
  headers?: any
  showLoading?: boolean
}

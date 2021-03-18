import {AxiosRequestConfig, AxiosResponse} from 'axios'

export interface IAction {
  type: string
  payload?: any
}
// give the error response a type different from expected depending on server responses
export interface EXAxiosError<T = any> extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response: AxiosResponse<T>
  isAxiosError: boolean
  toJSON: () => object
}
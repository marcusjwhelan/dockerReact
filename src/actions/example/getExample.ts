import {Dispatch} from 'redux'
import axios, {AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios'
import {EXAMPLE, IExampleError, IExampleSuccess} from './index'
import {IExample} from '../../models/example'

export const getExampleAction = (_param1: string) =>
  (dispatch: Dispatch<IExampleSuccess | IExampleError>) => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `https://jsonplaceholder.typicode.com/users`
    }
    axios.request(config)
      .then((res: AxiosResponse<IExample[]>) => {
        return dispatch({
          type: EXAMPLE.GET_EXAMPLE,
          payload: res.data
        })
      })
      .catch((err: AxiosError) => {
        return dispatch({
          type: EXAMPLE.GET_EXAMPLE_ERROR,
          payload: err.message
        })
      })
  }

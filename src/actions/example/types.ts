import {Action} from 'redux'

export enum EXAMPLE {
  GET_EXAMPLE = 'GET_EXAMPLE',
  GET_EXAMPLE_ERROR = 'GET_EXAMPLE_ERROR',
  GET_EXAMPLE_CLEAR = 'GET_EXAMPLE_CLEAR'
}

import {IExample} from '../../models/example'

/**
 * Interfaces/Types for Example
 */
export interface IExampleSuccess extends Action {
  type: EXAMPLE.GET_EXAMPLE
  payload: IExample[]
}

export interface IExampleError extends Action {
  type: EXAMPLE.GET_EXAMPLE_ERROR
  payload: string
}

export interface IExampleClear extends Action {
  type: EXAMPLE.GET_EXAMPLE_CLEAR
}

export type TExampleDispatch = IExampleSuccess | IExampleError | IExampleClear
/** --------------------------------------------------------------- */

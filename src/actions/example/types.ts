import {Action} from 'redux'

export enum EXAMPLE {
  GET_EXAMPLE_INIT = 'GET_EXAMPLE_INIT',
  GET_EXAMPLE = 'GET_EXAMPLE',
  GET_EXAMPLE_ERROR = 'GET_EXAMPLE_ERROR',
  GET_EXAMPLE_CLEAR = 'GET_EXAMPLE_CLEAR',
  GET_EXAMPLE_RESET = 'GET_EXAMPLE_RESET'
}

import {IExample} from '../../models/example'

/**
 * Interfaces/Types for Example
 */
export interface IExampleInit extends Action {
  type: EXAMPLE.GET_EXAMPLE_INIT
}
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
export interface IExampleReset extends Action {
  type: EXAMPLE.GET_EXAMPLE_RESET
}


export type TExampleDispatch = IExampleInit | IExampleSuccess | IExampleError | IExampleClear | IExampleReset
/** --------------------------------------------------------------- */

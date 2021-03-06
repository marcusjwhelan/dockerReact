import {EXAMPLE, TExampleDispatch} from '../actions/example'
import {IExample} from '../models/example'
import {Reducer} from 'redux'

export interface IExampleReducer {
  get_example: IExample[] | null
  get_example_error: string | null
}

export const initExampleReducer: IExampleReducer = {
  get_example: null,
  get_example_error: null
}

export const ExampleReducer: Reducer<IExampleReducer, TExampleDispatch> = (
  state: IExampleReducer = initExampleReducer,
  action: TExampleDispatch
): IExampleReducer => {
  switch (action.type) {
    case EXAMPLE.GET_EXAMPLE:
      return {
        ...state,
        get_example: action.payload,
        get_example_error: null
      }
    case EXAMPLE.GET_EXAMPLE_ERROR:
      return {
        ...state,
        get_example: null,
        get_example_error: action.payload
      }
    case EXAMPLE.GET_EXAMPLE_CLEAR:
      return {
        ...state,
        get_example: null,
        get_example_error: null
      }
    default:
      return state
  }
}
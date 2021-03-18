import {EXAMPLE, TExampleDispatch} from '../actions/example'
import {IExample} from '../models/example'
import {Reducer} from 'redux'

export interface IExampleReducer {
  examples: IExample[]
  get_example: IExample[] | null
  get_example_error: string | null
  get_example_loading: boolean
}

export const initExampleReducer: IExampleReducer = {
  examples: [],
  get_example: null,
  get_example_error: null,
  get_example_loading: false
}

export const ExampleReducer: Reducer<IExampleReducer, TExampleDispatch> = (
  state: IExampleReducer = initExampleReducer,
  action: TExampleDispatch
): IExampleReducer => {
  switch (action.type) {
    case EXAMPLE.GET_EXAMPLE_INIT:
      return {
        ...state,
        get_example_loading: true
      }
    case EXAMPLE.GET_EXAMPLE:
      return {
        ...state,
        examples: [...state.examples, ...action.payload],
        get_example: action.payload,
        get_example_error: null,
        get_example_loading: false
      }
    case EXAMPLE.GET_EXAMPLE_ERROR:
      return {
        ...state,
        get_example: null,
        get_example_error: action.payload,
        get_example_loading: false
      }
    case EXAMPLE.GET_EXAMPLE_CLEAR:
      return {
        ...state,
        get_example: null,
        get_example_error: null,
        get_example_loading: false
      }
    case EXAMPLE.GET_EXAMPLE_RESET:
      return {
        ...state,
        examples: []
      }
    default:
      return state
  }
}
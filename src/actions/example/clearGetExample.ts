import {EXAMPLE, IExampleClear} from './index'
import {Dispatch} from 'redux'

export const clearGetExampleAction = () => (dispatch: Dispatch<IExampleClear>) => {
  dispatch({
    type: EXAMPLE.GET_EXAMPLE_CLEAR
  })
}
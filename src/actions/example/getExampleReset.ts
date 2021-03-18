import {EXAMPLE, IExampleReset} from './index'
import {Dispatch} from 'redux'

export const resetGetExampleAction = (
) => (dispatch: Dispatch<IExampleReset>) => {
  dispatch({
    type: EXAMPLE.GET_EXAMPLE_RESET
  })
}
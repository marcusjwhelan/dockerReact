import {EXAMPLE, IExampleInit} from './index'
import {Dispatch} from 'redux'

export const initGetExampleAction = (
) => (dispatch: Dispatch<IExampleInit>) => {
  dispatch({
    type: EXAMPLE.GET_EXAMPLE_INIT
  })
}
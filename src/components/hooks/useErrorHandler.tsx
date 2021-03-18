import React, {useReducer, Dispatch} from 'react'
import {setValue} from '../../utils/setValue'
import {IAction} from '../../utils/interfaces'
import ErrorHandlerBasic from '../ErrorHandlerBasic'

export interface EHHState {
  // snackbar show
  success: boolean
  info: boolean
  warning: boolean
  error: boolean
  // snackbar messages
  successMessage: string
  infoMessage: string
  warningMessage: string
  errorMessage: string
}
export interface IEHHandler {
  _success: string
  _warning: string
  _info: string
  _error: string
  _successMessage: string
  _warningMessage: string
  _infoMessage: string
  _errorMessage: string
  ehState: EHHState
  ehDispatch: Dispatch<IAction>
  openSnackbar: (type: string) => void
  closeSnackbar: (type: string, reason?: string) => void
  renderErrorHandler: () => JSX.Element
}
export const initEHState = {
  success: false,
  info: false,
  warning: false,
  error: false,
  successMessage: '',
  infoMessage: '',
  warningMessage: '',
  errorMessage: ''
}

function reducer(state: EHHState, action: IAction) {
  switch (action.type) {
    case 'success':
      return {...state, success: action.payload}
    case 'info':
      return {...state, info: action.payload}
    case 'warning':
      return {...state, warning: action.payload}
    case 'error':
      return {...state, error: action.payload}
    case 'successMessage':
      return {...state, successMessage: action.payload}
    case 'infoMessage':
      return {...state, infoMessage: action.payload}
    case 'warningMessage':
      return {...state, warningMessage: action.payload}
    case 'errorMessage':
      return {...state, errorMessage: action.payload}
    default:
      return state
  }
}


function useErrorHandler(): IEHHandler {
  const _success = 'success'
  const _warning = 'warning'
  const _info = 'info'
  const _error = 'error'
  const _successMessage = 'successMessage'
  const _warningMessage = 'warningMessage'
  const _infoMessage = 'infoMessage'
  const _errorMessage = 'errorMessage'
  const [ehState, ehDispatch] = useReducer(reducer, initEHState)
  const snackBarWaitTime: number = 3000
  const openSnackbar = (type: string) => {
    ehDispatch(setValue(type, true))
  }
  const closeSnackbar = (type: string, reason?: string) => {
    if (reason && reason === 'clickaway') {
      return
    }
    ehDispatch(setValue(type, false))
    switch (type) {
      case _success:
        ehDispatch(setValue(_successMessage, ''))
        break
      case _info:
        ehDispatch(setValue(_infoMessage, ''))
        break
      case _warning:
        ehDispatch(setValue(_warningMessage, ''))
        break
      case _error:
        ehDispatch(setValue(_errorMessage, ''))
        break
      default:
        break
    }
  }
  const renderErrorHandler = () => {
    return (
      <ErrorHandlerBasic
        snackBarWaitTime={snackBarWaitTime}
        horizontal={'left'}
        vertical={'bottom'}
        success={ehState.success}
        info={ehState.info}
        warning={ehState.warning}
        error={ehState.error}
        successMessage={ehState.successMessage}
        infoMessage={ehState.infoMessage}
        warningMessage={ehState.warningMessage}
        errorMessage={ehState.errorMessage}
        closeSnackbar={closeSnackbar}
      />
    )
  }
  return {
    _success,
    _warning,
    _info,
    _error,
    _successMessage,
    _warningMessage,
    _infoMessage,
    _errorMessage,
    ehState,
    ehDispatch,
    openSnackbar,
    closeSnackbar,
    renderErrorHandler
  }
}

export default useErrorHandler
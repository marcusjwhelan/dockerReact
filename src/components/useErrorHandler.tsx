import React, {Suspense, lazy, useReducer, Dispatch} from 'react'
import {Loading} from './Loading'
import {setValue} from '../utils/setValue'

const ErrorHandlerBasic = lazy(() => import('./ErrorHandlerBasic'))

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
  state: EHHState
  setEHState: Dispatch<EHHState>
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

function useErrorHandler(): IEHHandler {
  const _success = 'success'
  const _warning = 'warning'
  const _info = 'info'
  const _error = 'error'
  const _successMessage = 'successMessage'
  const _warningMessage = 'warningMessage'
  const _infoMessage = 'infoMessage'
  const _errorMessage = 'errorMessage'
  const reducer = (state: EHHState, newState: EHHState) => ({...state, ...newState})
  const [state, setEHState] = useReducer(reducer, initEHState)
  const snackBarWaitTime: number = 3000
  const openSnackbar = (type: string) => {
    setEHState(setValue(type, true))
  }
  const closeSnackbar = (type: string, reason?: string) => {
    if (reason && reason === 'clickaway') {
      return
    }
    setEHState(setValue(type, false))
    switch (type) {
      case _success:
        setEHState(setValue(_successMessage, ''))
        break
      case _info:
        setEHState(setValue(_infoMessage, ''))
        break
      case _warning:
        setEHState(setValue(_warningMessage, ''))
        break
      case _error:
        setEHState(setValue(_errorMessage, ''))
        break
      default:
        break
    }
  }
  const renderErrorHandler = () => {
    return (
      <Suspense fallback={<Loading/>}>
        <ErrorHandlerBasic
          snackBarWaitTime={snackBarWaitTime}
          horizontal={'left'}
          vertical={'bottom'}
          success={state.success}
          info={state.info}
          warning={state.warning}
          error={state.error}
          successMessage={state.successMessage}
          infoMessage={state.infoMessage}
          warningMessage={state.warningMessage}
          errorMessage={state.errorMessage}
          closeSnackbar={closeSnackbar}
        />
      </Suspense>
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
    state,
    setEHState,
    openSnackbar,
    closeSnackbar,
    renderErrorHandler
  }
}

export default useErrorHandler
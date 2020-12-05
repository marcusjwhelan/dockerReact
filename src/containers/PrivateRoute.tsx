import React from 'react'
import {Route, Redirect, RouteProps} from 'react-router'

interface InjectedProps extends RouteProps {
  // base values
  super_redirectPath: string
  // string values to toggle appropriate snackbars
  _super_warning: string
  _super_error: string
  _super_warningMessage: string
  _super_errorMessage: string
  // parent method to open snackbar
  super_openSnackbar: (type: string) => void
  // set parent state
  super_setEHState: (key: string, value: any) => void
}

type PrivateRouteProps = InjectedProps

function PrivateRoute(props: PrivateRouteProps): JSX.Element {

  const localRender = (): JSX.Element => {
    const renderComponent1 = () => (<Redirect to={{pathname: props.super_redirectPath}}/>)
    return <Route {...props} component={renderComponent1}/>
  }
  return localRender()
}

export default PrivateRoute
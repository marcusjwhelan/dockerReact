import React from 'react'
import {Provider, ReactReduxContext} from 'react-redux'
import {ThemeProvider} from '@material-ui/core'
import {ConnectedRouter} from 'connected-react-router'
import {history} from './store'
import {configureStore} from './store'
import BaseRouter from './containers/BaseRouter'
import {EXTheme} from './theme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'

const store = configureStore({})

export const Application = () => (
  <Provider store={store}>
    <ThemeProvider theme={EXTheme}>
      <CssBaseline/>
      <ConnectedRouter history={history} context={ReactReduxContext} noInitialPop>
        <BaseRouter/>
      </ConnectedRouter>
    </ThemeProvider>
  </Provider>
)

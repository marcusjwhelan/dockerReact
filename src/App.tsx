import React from 'react'
import {Provider} from 'react-redux'
import {MuiThemeProvider} from '@material-ui/core'
import {ConnectedRouter} from 'connected-react-router'
import {history} from './store'
import {configureStore} from './store'
import {Base_Router} from './containers/BaseRouter'
import {HMTheme} from './theme/theme'
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter} from 'react-router-dom'
const store = configureStore()

export const Application = () => (
    <Provider store={store}>
        <MuiThemeProvider theme={HMTheme}>
            <CssBaseline />
            <ConnectedRouter history={history}>
                <BrowserRouter>
                    <Base_Router />
                </BrowserRouter>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
)

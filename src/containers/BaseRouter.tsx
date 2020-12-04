import React, {Suspense, lazy} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Header_Comp} from '../components/Header/Header'
import Footer_comp from '../components/Footer/Footer'
// import {PrivateRouter} from './PrivateRoute'
import Box from '@material-ui/core/Box'
import {Loading} from '../components/Loading'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import useMobile from '../components/useMobile'
import useErrorHandler from '../components/useErrorHandler'

const ScrollTop = lazy(() => import('../components/ScrollTop'))
const Home = lazy(() => import('./Home/Home'))

const styles = (_theme: Theme) => createStyles({
  container: {
    position: 'relative',
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    margin: 0
  },
  header: {
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 15
  },
  toolBarG: {
    minHeight: 64,
    '@media only screen and (max-width:840px)': {
      minHeight: 78
    }
  },
  contentDesktop: {
    marginTop: 0,
    marginRight: '1rem',
    minHeight: '100vh',
    zIndex: 0
  },
  contentMobile: {
    marginTop: 0,
    marginRight: '.4rem',
    minHeight: '100vh',
    zIndex: 0
  },
  fab: {
    zIndex: 100
  },
  footer: {
    bottom: 0,
    width: '100%',
    // @ts-ignore
    backgroundColor: 'black'
  }
})


interface InjectedProps extends WithStyles<typeof styles> {
}

type BaserRouterProps = InjectedProps

function BaseRouter(props: BaserRouterProps) {
  const {classes} = props
  const mobile = useMobile(false)
  const {renderErrorHandler} = useErrorHandler()
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Header_Comp/>
      </div>
      <Toolbar className={classes.toolBarG} disableGutters={true} variant={'dense'} id={'back-to-top-anchor'}/>
      <Box className={mobile ? classes.contentMobile : classes.contentDesktop} bgcolor={'background.default'}>
        {/* Main section for Routes */}
        <Suspense fallback={<Loading/>}>
          <Switch>
            {/* Example private */}
            {/*                            <PrivateRouter path={'/example'}
                                           component={Example}
                                           super_redirectPath={'/Example'}
                                           super_openSnackbar={this.openSnackbar}
                                           super_setValue={this.setValue}
                                           _super_warning={this._warning}
                                           _super_error={this._error}
                                           _super_warningMessage={this._warningMessage}
                                           _super_errorMessage={this._errorMessage}
                            />*/}
            <Route exact path="/" name="Home" component={Home}/>
          </Switch>
        </Suspense>
        {/* Error messages and information */}
        {renderErrorHandler()}
      </Box>
      <div className={classes.footer}>
        <Footer_comp/>
      </div>
      <Suspense fallback={<div/>}>
        <ScrollTop {...props}>
          <Fab className={classes.fab} color="primary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon/>
          </Fab>
        </ScrollTop>
      </Suspense>
    </div>
  )
}
export const Base_Router = withStyles(styles)(
  BaseRouter
)
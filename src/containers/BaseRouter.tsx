import React, {Suspense, lazy} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Header_Comp} from '../components/Header/Header'
import Footer_comp from '../components/Footer/Footer'
// import PrivateRouter from './PrivateRoute'
import Box from '@material-ui/core/Box'
import {Loading} from '../components/Loading'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import useMobile from '../components/hooks/useMobile'
import useErrorHandler from '../components/hooks/useErrorHandler'
import {makeStyles} from '@material-ui/core/styles'
import {EXTheme} from '../theme/theme'

const ScrollTop = lazy(() => import('../components/ScrollTop'))
const Home = lazy(() => import('./Home/Home'))

const useStyles = makeStyles(() => ({
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
      minHeight: 64
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
}))


function BaseRouter() {
  const classes = useStyles(EXTheme)
  const mobile = useMobile()
  const {
    ehDispatch,
    openSnackbar,
    _error,
    _errorMessage,
    _warning,
    _warningMessage,
    renderErrorHandler
  } = useErrorHandler()
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
            {/* <PrivateRouter
              path={'/example'}
              component={Example}
              super_redirectPath={'/Example'}
              super_openSnackbar={openSnackbar}
              super_setEHState={setEHState}
              _super_warning={_warning}
              _super_error={_error}
              _super_warningMessage={_warningMessage}
              _super_errorMessage={_errorMessage}
            />*/}
            <Route exact path="/" component={Home}/>
          </Switch>
        </Suspense>
        {/* Error messages and information */}
        {renderErrorHandler()}
      </Box>
      <div className={classes.footer}>
        <Footer_comp/>
      </div>
      <Suspense fallback={<div/>}>
        <ScrollTop>
          <Fab className={classes.fab} color="primary" size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon/>
          </Fab>
        </ScrollTop>
      </Suspense>
    </div>
  )
}
export default BaseRouter
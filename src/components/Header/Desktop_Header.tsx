import React, {useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import HideOnScroll from '../HideOnScroll'
import useErrorHandler from '../hooks/useErrorHandler'
import {useRouter} from '../hooks/useRouter'
import {makeStyles} from '@material-ui/core/styles'
import {Theme} from '@material-ui/core'
import {EXTheme} from '../../theme/theme'

// TODO ISSUE HERE
/*
 installed with npm install @material-ui/core@next @material-ui/icons@next @material-ui/lab@next date-fns

to run
docker-compose -f docker-compose-dev.yml build --no-cache
docker-compose -f docker-compose-dev.yml up

or
npm run start to get other errors as well.
 */
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import MobileDatePicker from '@material-ui/lab/MobileDatePicker'
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    maxHeight: 64,
    // @ts-ignore
    backgroundColor: 'black'
  },
  logoIconButton: {
    borderRadius: 0
  },
  logo: {
    // marginLeft: 8,
    'minHeight': 36,
    'maxHeight': 36,
    '@media (min-width:0px) and (orientation: landscape)': {
      'minHeight': 28,
      'maxHeight': 28
    },
    '@media (min-width:600px)': {
      'minHeight': 44,
      'maxHeight': 44
    }
  },
  paper: {
    position: 'absolute',
    top: 68,
    width: 126.883,
    zIndex: 10
  },
  dropDownList: {
    padding: 0
  }
}))

function DesktopHeader() {
  const classes = useStyles(EXTheme)
  const {
    _success,
    _successMessage,
    _warning,
    _warningMessage,
    _error,
    _errorMessage,
    ehState,
    ehDispatch,
    openSnackbar,
    renderErrorHandler
  } = useErrorHandler()
  const {pathname, push} = useRouter()

  const selectHome = (_: React.KeyboardEvent | React.MouseEvent) => {
    if (pathname !== '/') {
      push('/')
    }
  }
  useEffect(() => {
    ehDispatch({type: _errorMessage, payload: 'hello world'})
    openSnackbar(_error)
  }, [])

  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="static"
                className={clsx(classes.appBar)}
        >
          <Toolbar>
            <Box display={'flex'} width={'100%'} flexDirection={'row'}>
              <Box>
                <IconButton edge="start"
                            size={'small'}
                            classes={{root: classes.logoIconButton}}
                            onClick={selectHome}>
                  Home
                </IconButton>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label="For mobile"
                    value={''}
                    onChange={(newValue: string | null) => {
                      console.log(newValue)
                    }}
                    renderInput={(params: any) => <TextField {...params} margin="normal" />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {renderErrorHandler()}
    </div>
  )
}
export default DesktopHeader
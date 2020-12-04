import React, {useEffect} from 'react'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import HideOnScroll from '../HideOnScroll'
import useErrorHandler from '../useErrorHandler'
import {useRouter} from '../useRouter'
import {setValue} from '../../utils/setValue'

const styles = (_theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
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
})

interface IStyles extends WithStyles<typeof styles> {
}

function DesktopHeader(props: IStyles) {
  const {classes} = props
  const {
    setEHState,
    state,
    openSnackbar,
    _error,
    _errorMessage,
    renderErrorHandler
  } = useErrorHandler()
  const {pathname, push} = useRouter()

  const selectHome = (_: React.KeyboardEvent | React.MouseEvent) => {
    if (pathname !== '/') {
      push('/')
    }
  }
  useEffect(() => {
    setEHState(setValue(_errorMessage, 'hello world'))
    openSnackbar(_error)
  }, [])

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
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
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {renderErrorHandler()}
    </div>
  )
}
export const DesktopHeader_Comp = withStyles(styles)(DesktopHeader)
import React from 'react'
import DesktopHome from './Desktop_Home'
import MobileHome from './Mobile_Home'
import withStyles, {WithStyles} from '@material-ui/core/styles/withStyles'
import Box from '@material-ui/core/Box'
import {match, withRouter} from 'react-router'
import {createStyles, Theme} from '@material-ui/core'
import {History, Location} from 'history'
import useMobile from '../../components/useMobile'

const styles = (_theme: Theme) => createStyles({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -100,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.5
  }
})

interface InjectedProps extends WithStyles<typeof styles> {
}

interface HocInjected {
  location: Location
  match: match
  history: History
}

type HomeProps = InjectedProps & HocInjected

function Home(props: HomeProps) {
  const {classes} = props
  const mobile = useMobile()
  return (
    <Box height={'100%'} width={'100%'}>
      <div className={classes.root}/>
      {mobile ?
        <MobileHome/>
        :
        <DesktopHome/>
      }
    </Box>
  )
}

export default withRouter<HocInjected, any>(withStyles(styles)(
  Home
))
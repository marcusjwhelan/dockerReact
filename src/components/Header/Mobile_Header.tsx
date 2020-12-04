import React, {useState} from 'react'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import HideOnScroll from '../HideOnScroll'
import useErrorHandler from '../useErrorHandler'
import {useRouter} from '../useRouter'

const drawerWidth: number = 240
const styles = (theme: Theme) => createStyles({
  whiteText: {
    color: 'white'
  },
  root: {
    flexGrow: 1
  },
  appBar: {
    maxHeight: 78,
    // @ts-ignore
    backgroundColor: 'black'
  },
  logoIconButton: {
    borderRadius: 0
  },
  toolBar: {
    paddingRight: '.5rem',
    paddingLeft: '1rem'
  },
  logo: {
    'minHeight': 150,
    'maxHeight': 150,
    '@media (min-width:0px) and (orientation: landscape)': {
      'minHeight': 28,
      'maxHeight': 28
    },
    '@media (min-width:600px)': {
      'minHeight': 44,
      'maxHeight': 44
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'black'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  },
  paper: {
    position: 'absolute',
    top: 68,
    zIndex: 10
  }
})

interface IStyles extends WithStyles<typeof styles> {}

function MobileHeader(props: IStyles) {
  const {classes} = props
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
  const {
    renderErrorHandler
  } = useErrorHandler()
  const {pathname, push} = useRouter()
  const openMobileDrawer = () => {
    setMobileDrawerOpen(true)
  }

  const closeMobileDrawer = () => {
    setMobileDrawerOpen(false)
  }

  const toggleMobileDrawer = (_: React.KeyboardEvent | React.MouseEvent) => {
    if (mobileDrawerOpen) {
      closeMobileDrawer()
    } else {
      openMobileDrawer()
    }
  }
  const selectHome = (_: React.KeyboardEvent | React.MouseEvent) => {
    closeMobileDrawer()
    if (pathname !== '/') {
      push('/')
    }
  }
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar
          position="static"
          className={clsx(classes.appBar)}
        >
          <Toolbar className={classes.toolBar}>
            <Box display={'flex'} width={'100%'} flexDirection={'row'}>
              <Box>
                <IconButton
                  edge={'start'}
                  classes={{root: classes.logoIconButton}}
                  onClick={selectHome}>
                  Home
                </IconButton>
              </Box>
              <Box ml={'auto'}>
                <IconButton
                  onClick={toggleMobileDrawer}
                >
                  <MenuIcon fontSize={'large'}/>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={mobileDrawerOpen}
        onClose={toggleMobileDrawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={toggleMobileDrawer}>
            <ChevronRightIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List>
          <ListItem button onClick={selectHome}>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText classes={{root: classes.whiteText}} primary={'Home'}/>
          </ListItem>
        </List>
      </Drawer>
      {renderErrorHandler()}
    </div>
  )
}

export const MobileHeader_Comp = withStyles(styles)(MobileHeader)

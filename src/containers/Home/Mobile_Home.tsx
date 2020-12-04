import React from 'react'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
// import {ErrorHandlerHoc, EHHocState} from '../../components/classes/ErrorHandlerHoc'
import {isEmpty} from '../../utils/empty'
import {IExample} from '../../models/example'
import useExample from '../../components/useExample'

const styles = (theme: Theme) => createStyles({
  root: {
    height: '100%',
    paddingLeft: 0,
    paddingRight: 0
  },
  variableHeight: {
    width: '100%',
    height: '350px',
    // Extra small devices
    '@media only screen and (max-width: 300px)': {
      height: 350
    },
    '@media only screen and (min-width: 300px)': {
      height: 350
    },
    // Small devices
    '@media only screen and (min-width: 600px)': {
      height: 550
    },
    // Medium devices
    '@media only screen and (min-width: 800px)': {
      height: 780
    },
    contained: {
      color: theme.palette.text.primary,
      // @ts-ignore
      backgroundColor: 'blue',
      '&:hover': {
        // @ts-ignore
        backgroundColor: 'blue'
      }
    }
  }
})

interface InjectedProps extends WithStyles<typeof styles> {
}

type HomeProps = InjectedProps

function MobileHome(props: HomeProps) {
  const {classes} = props
  const {get_example, get_example_error} = useExample()

  return (
    <Container className={classes.root}>
      <Box>
        {isEmpty(get_example) ? 'Loading...' :
          get_example_error ? get_example_error : get_example?.map((users: IExample, index: number) => <h3 key={index}>{users.name}</h3>)}
      </Box>
    </Container>
  )
}
export default withStyles(styles)(MobileHome)
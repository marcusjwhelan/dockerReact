import React, {useEffect} from 'react'
import {Theme} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
// import {ErrorHandlerHoc, EHHocState} from '../../components/classes/ErrorHandlerHoc'
import {isEmpty} from '../../utils/empty'
import {IExample} from '../../models/example'
import useExample from '../../components/hooks/useExample'
import {makeStyles} from '@material-ui/core/styles'
import {EXTheme} from '../../theme/theme'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'

const useStyles = makeStyles((theme: Theme) => ({
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

function MobileHome(): JSX.Element {
  const classes = useStyles(EXTheme)
  const {
    examples,
    get_example_loading,
    dispatchGetExample,
    dispatchResetExamples
  } = useExample()

  useEffect(() => {
    dispatchResetExamples()
    dispatchGetExample()
  }, [])
  return (
    <Container className={classes.root}>
      <Box>
        {!isEmpty(examples) ?
          examples?.map((users: IExample, index: number) => <h3 key={index}>{users.name}</h3>)
          :
          <div/>
        }
      </Box>
      <Backdrop
        className={classes.backdrop}
        open={get_example_loading}
      >
        <CircularProgress color={'inherit'}/>
      </Backdrop>
    </Container>
  )
}
export default MobileHome
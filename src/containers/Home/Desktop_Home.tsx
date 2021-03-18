import React, {useEffect} from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import useExample from '../../components/hooks/useExample'
import {isEmpty} from '../../utils/empty'
import {IExample} from '../../models/example'
import {makeStyles} from '@material-ui/core/styles'
import {EXTheme} from '../../theme/theme'
import {Theme} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  ContainerRoot: {
    height: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    maxWidth: 1600
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

function DesktopHome() {
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
    <Container classes={{root: classes.ContainerRoot}}>
      <Box display={'flex'} pb={8}>
        <Box flexGrow={1}
             display={'flex'}
             flexDirection={'column'}
             justifyContent={'flex-start'}
        >
          {!isEmpty(examples) ?
            examples?.map((users: IExample, index: number) => <h3 key={index}>{users.name}</h3>)
            :
            <div/>
          }
        </Box>
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
export default DesktopHome
import React from 'react'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import useExample from '../../components/useExample'
import {isEmpty} from '../../utils/empty'
import {IExample} from '../../models/example'

const styles = (_theme: Theme) => createStyles({
  ContainerRoot: {
    height: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    maxWidth: 1600
  }
})

interface InjectedProps extends WithStyles<typeof styles> {
}

type HomeProps = InjectedProps

function DesktopHome(props: HomeProps) {
  const {classes} = props
  const {get_example, get_example_error} = useExample()

  return (
    <Container classes={{root: classes.ContainerRoot}}>
      <Box display={'flex'} pb={8}>
        <Box flexGrow={1}
             display={'flex'}
             flexDirection={'column'}
             justifyContent={'flex-start'}
        >
          {isEmpty(get_example) ? 'Loading...' :
            get_example_error ? get_example_error : get_example?.map((users: IExample, index: number) => <h3 key={index}>{users.name}</h3>)}
        </Box>
      </Box>
    </Container>
  )
}
export default withStyles(styles)(DesktopHome)
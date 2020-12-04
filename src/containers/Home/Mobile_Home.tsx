import React, {useEffect} from 'react'
import {createStyles, Theme, WithStyles} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import {useDispatch, useSelector} from 'react-redux'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import {clearGetExampleAction, getExampleAction} from '../../actions/example'
// import {ErrorHandlerHoc, EHHocState} from '../../components/classes/ErrorHandlerHoc'
import {ApplicationState} from '../../reducers'
import {isEmpty} from '../../utils/empty'
import {IExample} from '../../models/example'

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
  const dispatch = useDispatch()
  const {get_example, get_example_error} = useSelector((state: ApplicationState) => state.ExampleReducer)

  useEffect(() => {
    dispatch(getExampleAction('hello world'))
    return () => {
      dispatch(clearGetExampleAction())
    }
  }, [dispatch])

  return (
    <Container className={classes.root}>
      <Box>
        {isEmpty(get_example) ? 'Loading...' :
          get_example_error ? get_example_error : get_example?.map((users: IExample, index: number) => <h3 key={index}>{users.name}</h3>)}
      </Box>
    </Container>
  )
}
/* class MobileHome extends ErrorHandlerHoc<HomeProps, State> {
  private _getExampleWaiter: string = 'getExampleWaiter'

  constructor(props: HomeProps) {
    super(props)
    this.state = {
      ...this.ErrorHandlerStateInit,
      getExampleWaiter: false
    }
  }

  public componentDidMount(): void {
    this.setValue(this._getExampleWaiter, true)
    this.props.getExampleAction('hello world')
  }

  public componentDidUpdate(_prevProps: Readonly<HomeProps>, _prevState: Readonly<EHHocState & State>,
                            _snapshot?: any): void {
    /!** Handle example *!/
    if (this.state.getExampleWaiter &&
      (this.props.get_example || this.props.get_example_error) &&
      (!this.state.error && !this.state.info && !this.state.warning && !this.state.error)
    ) {
      if (this.props.get_example_error) {
        // handle example error
        this.setValue(this._errorMessage, 'error')
        this.openSnackbar(this._error)
        this.setValue(this._getExampleWaiter, false)
      }
      if (this.props.get_example) {
        // handle example success
        this.setValue(this._successMessage, 'success')
        this.openSnackbar(this._success)
        this.setValue(this._getExampleWaiter, false)
        console.log(this.props.get_example)
        this.props.clearGetExampleAction()
      }
    }
  }

  public render() {
    const {classes} = this.props
    return (
      <Container className={classes.root}>
        <Box>
          Hello world
        </Box>
      </Container>
    )
  }
}*/

// useSelector() replaces this
/* const mapStateToProps = (state: ApplicationState): IStateProps => ({
  get_example: state.example.get_example,
  get_example_error: state.example.get_example_error
})*/

// useDispatch() replaces this
/*
const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  getExampleAction: bindActionCreators(getExampleAction, dispatch),
  clearGetExampleAction: bindActionCreators(clearGetExampleAction, dispatch)
})
*/

export default withStyles(styles)(
  MobileHome
  // connect<IStateProps, IDispatchProps, InjectedProps>(mapStateToProps, mapDispatchToProps)(MobileHome)
)
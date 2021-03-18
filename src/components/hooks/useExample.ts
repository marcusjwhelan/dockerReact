import {useDispatch, useSelector} from 'react-redux'
import {ApplicationState} from '../../reducers'
import {useEffect} from 'react'
import {
  clearGetExampleAction,
  getExampleAction,
  initGetExampleAction,
  resetGetExampleAction
} from '../../actions/example'

function useExample() {
  const dispatch = useDispatch()
  const {
    examples,
    get_example,
    get_example_error,
    get_example_loading
  } = useSelector((state: ApplicationState) => state.ExampleReducer)
  const dispatchGetExample = () => {
    dispatch(initGetExampleAction())
    dispatch(getExampleAction('hello world'))
  }
  const dispatchResetExamples = () => {
    dispatch(resetGetExampleAction())
  }
  useEffect(() => {
    if (get_example || get_example_error) {
      dispatch(clearGetExampleAction())
    }
  }, [get_example, get_example_error])
  return {
    examples,
    get_example,
    get_example_error,
    get_example_loading,
    dispatchGetExample,
    dispatchResetExamples
  }
}

export default useExample
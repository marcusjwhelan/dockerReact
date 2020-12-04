import {useDispatch, useSelector} from 'react-redux'
import {ApplicationState} from '../reducers'
import {useEffect} from 'react'
import {clearGetExampleAction, getExampleAction} from '../actions/example'

function useExample() {
  const dispatch = useDispatch()
  const {get_example, get_example_error} = useSelector((state: ApplicationState) => state.ExampleReducer)

  useEffect(() => {
    dispatch(getExampleAction('hello world'))
    return () => {
      dispatch(clearGetExampleAction())
    }
  }, [dispatch])
  return {get_example, get_example_error}
}

export default useExample
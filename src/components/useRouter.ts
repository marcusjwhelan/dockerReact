import {useDispatch, useSelector} from 'react-redux'
import {ApplicationState} from '../reducers'
import {push as pushRouter} from 'connected-react-router'

export interface IUseRouter {
  pathname: string
  push: (path: string) => void
}

export function useRouter(): IUseRouter {
  const dispatch = useDispatch()
  const {location: {pathname}} = useSelector((state: ApplicationState) => state.router)
  function push(path: string) {
    dispatch(pushRouter(path))
  }
  return {
    pathname,
    push
  }
}
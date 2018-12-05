import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from './history'

export default asyncReducers =>
  combineReducers({
    router: connectRouter(history),
    ...asyncReducers
  })

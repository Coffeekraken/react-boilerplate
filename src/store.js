import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createReducer from './reducers'
import history from './history'

const store = createStore(
  createReducer(), // root reducer with router state
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunk
    )
  )
)

store.asyncReducers = {}

export default store

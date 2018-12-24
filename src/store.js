import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createReducer from './reducers'

import sagaMiddleware from './middlewares/saga'
import thunkMiddleware from './middlewares/thunk'
import routerMiddleware from './middlewares/router'
import webworkerMiddleware from './middlewares/webworker'
import isServer from './utils/isServer'

let initialState = {}
if (!isServer) {
  initialState =
    window.app && window.app.state ? JSON.parse(window.app.state) : {}
}
console.log(initialState)

const store = createStore(
  createReducer(), // root reducer with router state
  initialState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware, // for dispatching history actions
      sagaMiddleware,
      thunkMiddleware,
      webworkerMiddleware
    )
  )
)

export default store

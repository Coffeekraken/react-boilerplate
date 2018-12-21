import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import createReducer from './reducers'

import sagaMiddleware from './middlewares/saga'
import thunkMiddleware from './middlewares/thunk'
import webworkerMiddleware from './middlewares/webworker'

const store = createStore(
  createReducer(), // root reducer with router state
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunkMiddleware))
)

store.asyncReducers = {}

export default store

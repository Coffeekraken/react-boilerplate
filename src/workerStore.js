import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import sagaMiddleware from './middlewares/saga'
import thunkMiddleware from './middlewares/thunk'

import appReducer from './containers/App/reducer'

const reducers = {
  app: appReducer
}

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunkMiddleware))
)

store.asyncReducers = reducers

export default store

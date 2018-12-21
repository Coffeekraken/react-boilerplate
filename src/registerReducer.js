import { combineReducers } from 'redux'
import store from './workerStore'

export default function registerReducer(name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(combineReducers(store.asyncReducers))
  return asyncReducer
}

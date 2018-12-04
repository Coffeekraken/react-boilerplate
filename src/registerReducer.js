import store from "./configureStore"
import createReducer from "./reducers"

export default function injectReducer(name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
  return asyncReducer
}

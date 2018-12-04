import { applyMiddleware, compose, createStore } from "redux"
import { routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"
import createReducer from "./reducers"
import history from "./history"

const store = createStore(
  createReducer(), // root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      thunk
    )
  )
)

store.asyncReducers = {}

export default store

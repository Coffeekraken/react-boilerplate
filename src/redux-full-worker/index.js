import { createStore as createReduxStore } from 'redux'

let _store

export const HYDRATE = 'hydrate'
export const SET_INITIAL_STATE = 'set_initial_state'

export const setInitialState = state => {
  console.log(_store)
  _store.dispatch({
    type: SET_INITIAL_STATE,
    state
  })
}

export const createStore = (
  mainReducer,
  initialState = {},
  enhancer = null
) => {
  const store = createReduxStore(mainReducer, initialState, enhancer)
  // save the store for later use
  _store = store
  // return the newly created store
  return store
}

export const mainReducer = (reducers, worker) => {
  return (state = {}, action) => {
    if (action.type === HYDRATE) {
      console.warn('HYDRATE', action.payload)
      return {
        ...state,
        ...action.payload
      }
    } else if (action.type === SET_INITIAL_STATE) {
      return {
        ...state,
        ...action.state
      }
    } else {
      if (!action.type.match(/@@redux/)) {
        worker.postMessage(action)
      }
      return {
        ...state,
        ...reducers(state, action)
      }
    }
  }
}

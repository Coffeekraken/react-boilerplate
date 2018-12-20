// some libraries
import 'cssuseragent'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import {
  ConnectedRouter,
  routerMiddleware,
  connectRouter
} from 'connected-react-router'

import { BrowserRouter } from 'react-router-dom'

import history from './history'

import Bootstrap from './bootstrap'

import languageReducer from './containers/LanguageProvider/reducer'
import todosReducer from './containers/TodoPage/reducer'

import ReduxWorker from './redux.worker'
import { FETCH_TODOS } from './containers/TodoPage/constants'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reduxWorker = new ReduxWorker()
reduxWorker.addEventListener('message', e => {
  appStore.dispatch({
    type: 'HYDRATE',
    payload: e.data.state
  })
})

const reducers = combineReducers({
  router: connectRouter(history),
  language: languageReducer
  // todos: todosReducer
})

import todosInitialState from './containers/TodoPage/initialState'
import counterInitialState from './containers/Counter/initialState'

const mainReducer = (state = {}, action) => {
  if (action.type === 'HYDRATE') {
    console.warn('HYDRATE', action.payload)
    return {
      ...state,
      ...action.payload
    }
  } else {
    if (!action.type.match(/@@redux/)) {
      reduxWorker.postMessage(action)
    }

    return {
      ...state,
      ...reducers(state, action)
    }
  }
}

const appStore = createStore(
  mainReducer,
  {
    todos: todosInitialState,
    counter: counterInitialState
  },
  composeWithDevTools(applyMiddleware())
)

// determine the function to use to render the app
const rootElm = document.querySelector('#root')
let renderFn = ReactDOM.render
if (rootElm.hasChildNodes()) {
  renderFn = ReactDOM.hydrate
}

// render the app
window.onload = () => {
  Loadable.preloadReady().then(() => {
    renderFn(
      <Provider store={appStore}>
        <BrowserRouter>
          <Bootstrap />
        </BrowserRouter>
      </Provider>,
      rootElm
    )
  })
}

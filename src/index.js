// some libraries
import 'cssuseragent'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import { ConnectedRouter, connectRouter } from 'connected-react-router'

import history from './history'

import Bootstrap from './bootstrap'

import thunkMiddleware from './middlewares/thunk'

import languageReducer from './containers/LanguageProvider/reducer'

import ReduxWorker from './redux.worker'
import { applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { mainReducer, createStore } from './redux-full-worker'

import todosInitialState from './containers/TodoPage/initialState'
import counterInitialState from './containers/Counter/initialState'

const reduxWorker = new ReduxWorker()
reduxWorker.addEventListener('message', e => {
  appStore.dispatch({
    type: 'hydrate',
    payload: e.data.state
  })
})

const reducers = combineReducers({
  router: connectRouter(history),
  language: languageReducer
})
const appReducer = mainReducer(reducers, reduxWorker)
const appStore = createStore(
  appReducer,
  {
    // todos: todosInitialState,
    counter: counterInitialState
  },
  composeWithDevTools(applyMiddleware(thunkMiddleware))
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
        <ConnectedRouter history={history}>
          <Bootstrap />
        </ConnectedRouter>
      </Provider>,
      rootElm
    )
  })
}

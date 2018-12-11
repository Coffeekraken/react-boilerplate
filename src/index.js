// some libraries
import 'cssuseragent'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store from './store'
import history from './history'

import Bootstrap from './bootstrap'

// determine the function to use to render the app
const rootElm = document.querySelector('#root')
let renderFn = ReactDOM.render
if (rootElm.hasChildNodes()) {
  renderFn = ReactDOM.hydrate
}

// render the app
renderFn(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Bootstrap />
    </ConnectedRouter>
  </Provider>,
  rootElm
)

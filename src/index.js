// some libraries
import 'cssuseragent'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import { Provider } from 'react-redux'

import { ConnectedRouter } from 'connected-react-router'

import Bootstrap from './bootstrap'

import history from './history'

import store from './store'

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
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Bootstrap />
        </ConnectedRouter>
      </Provider>,
      rootElm
    )
  })
}

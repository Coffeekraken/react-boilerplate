// some libraries
import 'cssuseragent'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store from './configureStore'
import history from './history'

import Bootstrap from './bootstrap'

// render the app
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Bootstrap />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

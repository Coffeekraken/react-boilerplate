import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import dotenv from 'dotenv'

import App from "./containers/App"
import store from "./configureStore"
import history from "./history"

// base styling
import "./styles/style.css"

// init dotenv
dotenv.config()

// render the app
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

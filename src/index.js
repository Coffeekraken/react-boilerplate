import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

import App from "./containers/App"
import store from "./configureStore"
import history from "./history"

import LanguageProvider from './containers/LanguageProvider'
import { translationMessages, locale } from './i18n'

// base styling
import "./styles/style.css"

// render the app
ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider
      locale={locale}
      messages={translationMessages}
    >
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById("root")
)

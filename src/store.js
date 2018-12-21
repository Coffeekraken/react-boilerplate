import { connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import history from './history'

import languageReducer from './containers/LanguageProvider/reducer'

import ReduxWorker from './redux.worker'

import { createStore } from './redux-full-worker'

const reducers = {
  router: connectRouter(history),
  language: languageReducer
}

const store = createStore(ReduxWorker, reducers, {}, composeWithDevTools())
export default store

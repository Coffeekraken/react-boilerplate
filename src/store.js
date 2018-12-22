import { connectRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { createStore } from 'coffeekraken-redux-full-worker'

import history from './history'

import ReduxWorker from './redux.worker'

import counterInitialState from './containers/Counter/initialState'
import todosInitialState from './containers/TodoPage/initialState'
import languageInitialState from './containers/LanguageProvider/initialState'

const reducers = {
  router: connectRouter(history)
}

const store = createStore(
  ReduxWorker,
  reducers,
  {
    counter: counterInitialState,
    todos: todosInitialState,
    language: languageInitialState
  },
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

import { expose } from 'coffeekraken-redux-full-worker'

import store from './workerStore'
import registerSaga from './registerSaga'
import registerReducer from './registerReducer'

import languageReducer from './containers/LanguageProvider/reducer'

import todosSagas from './containers/TodoPage/sagas'
import todoReducer from './containers/TodoPage/reducer'

import counterReducer from './containers/Counter/reducer'

registerReducer('language', languageReducer)
registerReducer('counter', counterReducer)
registerReducer('todos', todoReducer)
registerSaga(todosSagas)

export default expose(store, self)

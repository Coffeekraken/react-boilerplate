import store from './workerStore'
import registerSaga from './registerSaga'
import registerReducer from './registerReducer'

import todosSagas from './containers/TodoPage/sagas'
import todoReducer from './containers/TodoPage/reducer'

import counterReducer from './containers/Counter/reducer'

import { expose } from './redux-full-worker'

registerReducer('counter', counterReducer)
registerReducer('todos', todoReducer)
registerSaga(todosSagas)

export default expose(store, self)

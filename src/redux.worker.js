import store from './store'
import reducers from './reducers'
import registerSaga from './registerSaga'
import registerReducer from './registerReducer'

import todosSagas from './containers/TodoPage/sagas'
import todoReducer from './containers/TodoPage/reducer'

registerSaga(todosSagas)
registerReducer('todos', todoReducer)

store.subscribe(() => {
  self.postMessage({
    type: 'HYDRATE',
    state: store.getState()
  })
})

self.addEventListener('message', e => {
  store.dispatch(e.data)
})

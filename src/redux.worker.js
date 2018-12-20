import store from './store'
import reducers from './reducers'
import registerSaga from './registerSaga'
import registerReducer from './registerReducer'

import todosSagas from './containers/TodoPage/sagas'
import todoReducer from './containers/TodoPage/reducer'

import counterReducer from './containers/Counter/reducer'

registerReducer('counter', counterReducer)

registerSaga(todosSagas)
registerReducer('todos', todoReducer)

let timeout
store.subscribe(() => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    self.postMessage({
      type: 'HYDRATE',
      state: store.getState()
    })
  })
})

self.addEventListener('message', e => {
  console.log('e', e.data)
  store.dispatch(e.data)
})

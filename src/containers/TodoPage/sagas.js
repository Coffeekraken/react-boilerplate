import { put, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_TODOS, TODOS_FETCHED } from './constants'
import SSRPromise from '../../utils/SSRPromise'

function* fetchTodos(action) {
  const ssrRequestId = yield select(state => state.app.ssrRequestId)
  const response = yield SSRPromise(
    axios.get(
      'https://my-json-server.typicode.com/coffeekraken/react-boilerplate/todos'
    ),
    ssrRequestId
  )
  yield put({ type: TODOS_FETCHED, todos: response.data })
}

export default function* mySaga() {
  yield takeEvery(FETCH_TODOS, fetchTodos)
}

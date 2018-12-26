import axios from 'axios'
import { expose } from 'coffeekraken-redux-web-worker'
import { FETCH_TODOS, TODOS_FETCHED } from './constants'
import SSRPromise from '@/utils/SSRPromise'

export default expose(
  {
    [FETCH_TODOS]: async ({ dispatch, state }) => {
      const todos = await SSRPromise(
        axios.get(
          'https://my-json-server.typicode.com/coffeekraken/react-boilerplate/todos'
        ),
        state.app.ssrRequestId
      )
      dispatch({
        type: TODOS_FETCHED,
        todos: todos.data
      })
    }
  },
  self
)

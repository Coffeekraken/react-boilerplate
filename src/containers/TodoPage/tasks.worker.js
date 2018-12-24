import axios from 'axios'
import { expose } from 'coffeekraken-redux-web-worker'
import { FETCH_TODOS, TODOS_FETCHED } from './constants'
import SSRPromise from '@/utils/SSRPromise'

export default expose(
  {
    [FETCH_TODOS]: async ({ dispatch }) => {
      const todos = await SSRPromise(
        axios.get(
          'https://my-json-server.typicode.com/coffeekraken/react-boilerplate/todos'
        )
      )
      dispatch({
        type: TODOS_FETCHED,
        todos: todos.data
      })
    }
  },
  self
)

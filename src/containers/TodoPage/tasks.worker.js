import axios from 'axios'
import { WebWorker } from '../../middlewares/webworker'
import { FETCH_TODOS, TODOS_FETCHED } from './constants'

class TodoTasks extends WebWorker {
  async [FETCH_TODOS]({ dispatch }) {
    const todos = await axios.get(
      'https://my-json-server.typicode.com/coffeekraken/react-boilerplate/todos'
    )
    dispatch({
      type: TODOS_FETCHED,
      todos: todos.data
    })
  }
}
;(() => new TodoTasks(self))()

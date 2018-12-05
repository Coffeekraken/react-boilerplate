import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'

import Checkbox from '../../components/Checkbox'
import Card from '../../components/Card'
import Button from '../../components/Button'

import { addTodo, toggleTodo, removeTodo, changeFilter } from './actions'
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './constants'
import { getVisibleTodos } from './selectors'
import messages from './messages'

import reducer from './reducer'
import registerReducer from '../../registerReducer'

import './style.css'

// register the reducer
registerReducer('todos', reducer)

class TodoPage extends React.PureComponent {
  state = {
    todo: ''
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeFilter(e, filter) {
    const { changeFilter } = this.props
    changeFilter(filter)
  }

  addTodo(e) {
    const { addTodo } = this.props
    switch (e.keyCode) {
      case 13: // enter
        addTodo(this.state.todo)
        this.setState({
          todo: ''
        })
        break
      default:
    }
  }

  toggleTodo(e, todo) {
    const { toggleTodo } = this.props
    toggleTodo(todo)
  }

  removeTodo(e, todo) {
    const { removeTodo } = this.props
    removeTodo(todo)
  }

  render() {
    const { todos, filter, intl } = this.props
    return (
      <div className="page todo">
        <Card>
          <input
            autoFocus
            type="text"
            name="todo"
            className="form-input m-b"
            placeholder={intl.formatMessage(messages.newTodo)}
            value={this.state.todo}
            onChange={e => this.onChange(e)}
            onKeyDown={e => this.addTodo(e)}
          />
          <ul className="todo__list">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={
                  'todo__item ' + (todo.done ? 'todo__item--done' : '')
                }
              >
                <Checkbox
                  className="todo__item-checkbox"
                  checked={todo.done}
                  onChange={e => this.toggleTodo(e, todo)}
                />
                <span className="todo__item-text">{todo.text}</span>
                <button
                  className="todo__item-remove"
                  onClick={e => this.removeTodo(e, todo)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          <div className="m-t">
            <Button
              primary={filter === FILTER_ALL ? 1 : 0}
              onClick={e => this.changeFilter(e, FILTER_ALL)}
            >
              <FormattedMessage {...messages.showAll} />
            </Button>
            <Button
              primary={filter === FILTER_ACTIVE ? 1 : 0}
              onClick={e => this.changeFilter(e, FILTER_ACTIVE)}
            >
              <FormattedMessage {...messages.showActive} />
            </Button>
            <Button
              primary={filter === FILTER_COMPLETED ? 1 : 0}
              onClick={e => this.changeFilter(e, FILTER_COMPLETED)}
            >
              <FormattedMessage {...messages.showCompleted} />
            </Button>
          </div>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
  filter: state.todos.filter
})
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  toggleTodo: todo => dispatch(toggleTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  changeFilter: filter => dispatch(changeFilter(filter))
})

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoPage)
)

import { defineMessages } from 'react-intl'

// scope
export const scope = 'todo'

// messages
export default defineMessages({
  newTodo: {
    id: `${scope}.newTodo`,
    defaultMessage: 'New todo'
  },
  showAll: {
    id: `${scope}.show.all`,
    defaultMessage: 'All'
  },
  showActive: {
    id: `${scope}.show.active`,
    defaultMessage: 'Active'
  },
  showCompleted: {
    id: `${scope}.show.completed`,
    defaultMessage: 'Completed'
  }
})

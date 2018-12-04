import { defineMessages } from 'react-intl'

// scope
export const scope = 'homepage'

// messages
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Coffeekraken React Boilerplate'
  },
  body: {
    id: `${scope}.body`,
    defaultMessage: 'React boilerplate integrated with react-scripts, redux, redux-thunk, reselect, sugar, gridle and more...',
  },
  increment: {
    id: `${scope}.counter.increment`,
    defaultMessage: 'Increment'
  },
  incrementTooltip: {
    id: `${scope}.counter.increment.tooltip`,
    defaultMessage: 'Increment the counter'
  },
  decrement: {
    id: `${scope}.counter.decrement`,
    defaultMessage: 'Decrement'
  },
  decrementTooltip: {
    id: `${scope}.counter.decrement.tooltip`,
    defaultMessage: 'Decrement the counter'
  }
})

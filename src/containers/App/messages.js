import { defineMessages } from 'react-intl'

// scope
export const scope = 'app'

// messages
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Coffeekraken React Boilerplate'
  },
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'React boilerplate integrated with react-scripts, redux, redux-thunk, reselect, sugar, gridle and more...'
  }
})

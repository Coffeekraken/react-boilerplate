import produce from 'immer'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './constants'
import initialState from './initialState'

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      draft.count += action.increment
      break
    case DECREMENT_COUNTER:
      draft.count -= action.decrement
      break
    default:
      return draft
  }
  return draft
})

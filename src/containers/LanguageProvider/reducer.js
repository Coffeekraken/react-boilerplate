import produce from 'immer'

import { CHANGE_LOCALE } from './constants'
import { locale } from '../../i18n'

const initialState = {
  locale
}

export default produce((draft = initialState, action) => {
  switch(action.type) {
    case CHANGE_LOCALE:
      draft.locale = action.locale
      return draft
    default:
      return draft
  }
})

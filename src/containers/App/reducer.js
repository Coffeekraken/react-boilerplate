import produce from 'immer'
import { SET_SSR_REQUEST_ID } from './constants'

const initialState = {
  ssrRequestId: null
}

export default produce((draft = initialState, action) => {
  switch (action.type) {
    case SET_SSR_REQUEST_ID:
      draft.ssrRequestId = action.ssrRequestId
      return draft
    default:
      return draft
  }
})

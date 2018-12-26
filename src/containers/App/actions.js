import { SET_SSR_REQUEST_ID } from './constants'

export const setSsrRequestId = ssrRequestId => ({
  type: SET_SSR_REQUEST_ID,
  ssrRequestId
})

import produce from 'immer'
const initialState = {}

export default produce((state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
})

const promises = {}
export const getPromises = ssrRequestId => promises[ssrRequestId] || []
export const resetPromises = ssrRequestId => {
  promises[ssrRequestId] = []
  return promises[ssrRequestId]
}
export default (promise, ssrRequestId = 'default') => {
  if (!promises[ssrRequestId]) promises[ssrRequestId] = []
  promises[ssrRequestId].push(promise)
  return promise
}

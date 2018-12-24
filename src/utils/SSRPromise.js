let promises = []
export const getPromises = () => promises
export const resetPromises = () => {
  promises = []
  return promises
}
export default promise => {
  promises.push(promise)
  return promise
}

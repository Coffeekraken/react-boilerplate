import { createMemoryHistory, createBrowserHistory } from 'history'
import isServer from './utils/isServer'
const history = isServer ? createMemoryHistory() : createBrowserHistory()
export default history

import { detect } from 'detect-browser'
const browser = detect()
const isServer = !browser
export default () => isServer

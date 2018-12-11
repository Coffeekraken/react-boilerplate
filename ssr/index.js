import express from 'express'
import Loadable from 'react-loadable'

import serverRenderer from './middleware/renderer'

const path = require('path')
const program = require('commander')

// initialize the application and create the routes
const app = express()
const router = express.Router()

// commander options
program
  .version(require('../package.json').version)
  .option('-p, --port [value]', 'Server port')
  .parse(process.argv)

// set config
const PORT = program.port || 3333

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer)

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// anything else should act as our index page
// react-router will take care of everything
router.use('*', serverRenderer)

// tell the app to use the above rules
app.use(router)

// start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, error => {
    if (error) {
      return console.log('something bad happened', error)
    }
    console.log(`listening on "${PORT}"...`)
    return true
  })
})

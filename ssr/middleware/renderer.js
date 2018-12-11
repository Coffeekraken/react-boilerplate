import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import Bootstrap from '../../src/bootstrap'
import store from '../../src/store'

const path = require('path')
const fs = require('fs')

export default (req, res) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err)
      return res.status(404).end()
    }

    const context = {}

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.originalUrl} context={context}>
          <Bootstrap />
        </StaticRouter>
      </Provider>
    )

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    )
  })
}

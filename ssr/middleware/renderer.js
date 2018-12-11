import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import Bootstrap from '../../src/bootstrap'
import store from '../../src/store'

import manifest from '../../build/asset-manifest.json'

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
    const modules = []
    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <Provider store={store}>
          <StaticRouter location={req.originalUrl} context={context}>
            <Bootstrap />
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    )

    // extract the chunk file that match the modules captured
    const extractAssets = (assets, chunks) =>
      Object.keys(assets)
        .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
        .map(k => assets[k])

    // generate the script tags for the modules captured
    const extraChunks = extractAssets(manifest, modules).map(
      c => `<script type="text/javascript" src="${c}"></script>`
    )

    // inject the rendered app into our html and send it
    return res.send(
      htmlData
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace('</body>', extraChunks.join('') + '</body>')
    )
  })
}

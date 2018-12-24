import React from 'react'
import ReactDOMServer from 'react-dom/server'
import objectHash from 'object-hash'

import Loadable from 'react-loadable'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import Bootstrap from '../../src/bootstrap'
import store from '../../src/store'
import { getPromises, resetPromises } from '../../src/utils/SSRPromise'

import manifest from '../../build/asset-manifest.json'

const path = require('path')
const fs = require('fs')

function render(req) {
  const modules = []
  const context = {}
  const html = ReactDOMServer.renderToString(
    <Loadable.Capture report={m => modules.push(m)}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl} context={context}>
          <Bootstrap />
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  )
  return {
    html,
    modules
  }
}

export default (req, res) => {
  req.id = Math.round(Math.random() * 999999999)

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err)
      return res.status(404).end()
    }

    // empty the promises
    resetPromises()

    // render the app as a string
    const renderResult = render(req)

    // wait for all bubbled promises to finish
    Promise.all(getPromises()).then(() => {
      // extract the chunk file that match the modules captured
      const extractAssets = (assets, chunks) =>
        Object.keys(assets)
          .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
          .map(k => assets[k])

      // generate the script tags for the modules captured
      const extraChunks = extractAssets(manifest, renderResult.modules).map(
        c => `<script type="text/javascript" src="${c}"></script>`
      )

      // render again the app with all the data
      // coming from the promises etc...
      const finalRenderResult = render(req)

      // inject the rendered app into our html and send it
      return res.send(
        htmlData
          // inject the rendered html inside the root div
          .replace(
            '<div id="root"></div>',
            `<div id="root">${finalRenderResult.html}</div>`
          )
          // inject the needed js chunks
          .replace('</body>', extraChunks.join('') + '</body>')
          // put the app state directly after the body to have access to it in the
          // loaded js files
          .replace(
            '<body>',
            `<body><script>
            window.app = {
              state: '${JSON.stringify(store.getState())}'
            }
          </script>`
          )
      )
    })
  })
}

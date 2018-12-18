const { addDecoratorsLegacy } = require('customize-cra')
const { disableEsLint } = require('customize-cra')
// const { useEslintRc } = require('customize-cra')
// const fs = require('fs')

module.exports = function override(config) {
  // fix issue with worker and window
  config.output.globalObject = 'this'

  // add decorators support
  addDecoratorsLegacy()(config)

  // disable eslinting cause of issues with the workers
  disableEsLint()(config)
  // useEslintRc()(config)

  // add the worker loader
  config.module.rules.unshift({
    test: /\.worker\.js$/,
    use: {
      loader: 'worker-loader',
      options: {
        inline: true,
        fallback: false
      }
    }
  })

  // fs.writeFileSync('config.json', JSON.stringify(config, null, 2))

  // return the new config
  return config
}

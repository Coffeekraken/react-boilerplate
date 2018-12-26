const {
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias
} = require('customize-cra')
// const { useEslintRc } = require('customize-cra')
// const fs = require('fs')
const path = require('path')

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

  // add some aliases
  addWebpackAlias({
    '@': path.join(__dirname, 'src')
  })(config)

  // fs.writeFileSync('config.json', JSON.stringify(config, null, 2))

  // return the new config
  return config
}

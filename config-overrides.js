const addDecoratorsLegacy = require('customize-cra').addDecoratorsLegacy

module.exports = function override(config) {
  // fix issue with worker and window
  // config.output.globalObject = 'this'

  // // add the worker loader
  // config.module.rules.push({
  //   test: /\.worker\.js$/,
  //   use: {
  //     loader: 'worker-loader',
  //     options: {
  //       inline: true,
  //       fallback: false
  //     }
  //   }
  // })

  // add decorators support
  addDecoratorsLegacy()(config)

  // return the new config
  return config
}

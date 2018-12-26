const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /config\.js$/,
        loaders: ['coffeekraken-import-glob']
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}

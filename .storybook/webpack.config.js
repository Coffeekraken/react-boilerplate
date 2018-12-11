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
  }
}

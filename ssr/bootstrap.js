require('ignore-styles')

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'dynamic-import-node',
    '@babel/plugin-proposal-class-properties',
    'react-loadable/babel'
  ]
})

require('./index')

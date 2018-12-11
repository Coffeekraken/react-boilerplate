const path = require('path')
module.exports = {
  components: 'src/components/**/index.js',
  require: [path.join(__dirname, 'src/styles/style.css')]
}

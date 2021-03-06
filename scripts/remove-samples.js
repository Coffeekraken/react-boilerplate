const fs = require('fs')
const rimraf = require('rimraf')
const glob = require('glob-all')

// delete all the sample containers
rimraf.sync('src/containers/Counter')
rimraf.sync('src/containers/CounterPage')
rimraf.sync('src/containers/FormPage')
rimraf.sync('src/containers/Header')
rimraf.sync('src/containers/HomePage')
rimraf.sync('src/containers/TodoPage')

// remove assets
fs.unlinkSync('src/assets/disaster.mp4')
fs.unlinkSync('src/assets/doc-header.jpg')

// remove all code from files that are scoped inside /* sample:start */ and /* sample:end */
const files = glob.sync('src/**/*.js')
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace(
    /\{?\/\*\ssample:start\s\*\/\}?(.*?)\{?\/\*\ssample:end\s\*\/\}?/gs,
    ''
  )
  fs.writeFileSync(file, content)
})

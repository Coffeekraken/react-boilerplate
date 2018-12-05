const fs = require('fs')
const chalk = require('chalk')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function npmRunFavicon() {
  const { stdout, stderr } = await exec('npm run favicon')
  if (stdout) console.log(stdout)
  if (stderr) console.log(stderr)
}

// make sure we have the favicons generated
if (!fs.existsSync('build/static/favicons/favicons.html')) {
  console.log(
    chalk.yellow(
      "You don't have build the favicon using `npm run favicon`. We wil do it for you right now..."
    )
  )
  npmRunFavicon()
}

// read the favicons.html file
const faviconsFileContent = fs
  .readFileSync('build/static/favicons/favicons.html', 'utf8')
  .toString()

// read the index.html file content
const indexHtmlFileContent = fs.readFileSync('build/index.html').toString()

// remove the actual favicons if already present
const sanitizedIndexHtmlFileContent = indexHtmlFileContent.replace(
  /<!--\sfavicons\s-->.*<!--\s\/favicons\s-->/gms,
  ''
)

// inject the favicons code inside the index.html one
const newIndexHtmlFileContent = sanitizedIndexHtmlFileContent.replace(
  '</head>',
  `<!-- favicons -->${faviconsFileContent}<!-- /favicons --></head>`
)

// write the new content inside the file
fs.writeFileSync(
  'build/index.html',
  newIndexHtmlFileContent.replace(/(\r\n\t|\n|\r\t)/gm, '')
)

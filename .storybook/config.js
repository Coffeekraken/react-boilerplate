import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

// add addons
addDecorator(withInfo)
// addDecorator(centered)

addParameters({
  info: {
    inline: true
  }
})

// load global style
require('./style.css')
require('../src/styles/style.css')

function loadStories() {
  require('../src/components/*/stories.js')
}

configure(loadStories, module)

import React from 'react'
import { storiesOf } from '@storybook/react'
import Tooltip from './index'

storiesOf('Tooltip', module)
  .add('default', () => (
    <div className="active relative">
      <Tooltip>I m a cool tooltip</Tooltip>
    </div>
  ))
  .add('primary', () => (
    <div className="active relative">
      <Tooltip primary>I m a cool tooltip</Tooltip>
    </div>
  ))
  .add('secondary', () => (
    <div className="active relative">
      <Tooltip secondary>I m a cool tooltip</Tooltip>
    </div>
  ))

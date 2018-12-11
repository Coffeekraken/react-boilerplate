import React from 'react'
import { storiesOf } from '@storybook/react'
import P from './index'

storiesOf('P', module)
  .add('default', () => <P>I m a P tag</P>)
  .add('lead', () => <P lead>I m a lead P tag</P>)

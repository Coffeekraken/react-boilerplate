import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Button', module)
  .add('default', () => <Button>I m a button</Button>)
  .add('primary', () => <Button primary>I m a button</Button>)
  .add('secondary', () => <Button secondary>I m a button</Button>)
  .add('outline', () => <Button outline>I m a button</Button>)
  .add('link', () => <Button link>I m a button</Button>)

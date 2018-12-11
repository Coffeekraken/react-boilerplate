import React from 'react'
import { storiesOf } from '@storybook/react'
import FullscreenVideo from './index'
import video from '../../assets/disaster.mp4'

storiesOf('Fullscreen video', module).add('default', () => (
  <FullscreenVideo src={video} autoPlay muted loop />
))

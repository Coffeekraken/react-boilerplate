import React from 'react'

import Card from '../../components/Card'
import Counter from '../Counter/Loadable'

import './style.css'

export default () => (
  <div className="page t-center">
    <Card className="counter">
      <Counter />
    </Card>
  </div>
)

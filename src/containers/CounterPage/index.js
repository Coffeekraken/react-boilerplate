import React from 'react'

import Card from '@/components/Card'
import Counter from '@/containers/Counter/Loadable'

export default () => (
  <div className="page t-center">
    <Card className="counter">
      <Counter as="counter1" className="m-b" />
      <Counter as="counter2" />
    </Card>
  </div>
)

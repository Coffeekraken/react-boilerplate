import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

import headerImg from '@/assets/doc-header.jpg'
import H1 from '@/components/H1'
import P from '@/components/P'
import Card from '@/components/Card'

export default () => (
  <div className="page">
    <Card className="homepage">
      <H1 className="m-b">
        <FormattedMessage {...messages.title} />
      </H1>
      <P lead="true" className="m-b">
        <FormattedMessage {...messages.body} />
      </P>
      <img src={headerImg} alt="Coffeekraken React Boilerplate" />
    </Card>
  </div>
)

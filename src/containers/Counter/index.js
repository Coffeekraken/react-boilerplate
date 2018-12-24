import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import multireducer, { bindActionCreators } from 'multireducer'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import { incrementCounter, decrementCounter } from './actions'

import Tooltip from '@/components/Tooltip'
import Button from '@/components/Button'

import reducer from './reducer'
import registerReducer from '@/utils/registerReducer'

// register the reducers
registerReducer(
  'counter',
  multireducer({
    counter1: reducer,
    counter2: reducer
  })
)

export default
@connect(
  (state, { as }) => ({
    count: state.counter[as].count
  }),
  (dispatch, { as }) =>
    bindActionCreators(
      {
        incrementCounter,
        decrementCounter
      },
      dispatch,
      as
    )
)
class extends React.PureComponent {
  static defaultProps = {
    increment: null,
    decrement: null,
    count: 0
  }

  static propTypes = {
    increment: PropTypes.func,
    decrement: PropTypes.func,
    count: PropTypes.number
  }

  increment() {
    const { incrementCounter } = this.props
    incrementCounter()
  }

  decrement() {
    const { decrementCounter } = this.props
    decrementCounter()
  }

  render() {
    const { count, className } = this.props
    const cn = `counter ${className}`

    return (
      <div className={cn}>
        <Button className="m-r relative" onClick={() => this.decrement()}>
          <Tooltip primary="true">
            <FormattedMessage {...messages.decrementTooltip} />
          </Tooltip>
          <FormattedMessage {...messages.decrement} />
        </Button>
        {count}
        <Button
          className="m-l relative"
          primary="true"
          onClick={() => this.increment()}
        >
          <Tooltip secondary="true">
            <FormattedMessage {...messages.incrementTooltip} />
          </Tooltip>
          <FormattedMessage {...messages.increment} />
        </Button>
      </div>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import { incrementCounter, decrementCounter } from './actions'

import Tooltip from '../../components/Tooltip'
import Button from '../../components/Button'

export default
@connect(
  state => ({
    count: state.counter.count
  }),
  dispatch => ({
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  })
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
    const { increment } = this.props
    increment()
  }

  decrement() {
    const { decrement } = this.props
    decrement()
  }

  render() {
    const { count } = this.props
    return (
      <div className="counter">
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

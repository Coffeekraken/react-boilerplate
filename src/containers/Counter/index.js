import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FormattedMessage } from "react-intl"
import messages from "./messages"
import { incrementCounter, decrementCounter } from "./actions"

import Tooltip from "../../components/Tooltip"
import Button from "../../components/Button"

import reducer from "./reducer"
import registerReducer from "../../registerReducer"

// register the reducer
registerReducer("counter", reducer)

class Counter extends React.PureComponent {
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

Counter.defaultProps = {
  increment: null,
  decrement: null,
  count: 0
}

Counter.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  count: PropTypes.number
}

const mapStateToProps = state => ({
  count: state.counter.count
})
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

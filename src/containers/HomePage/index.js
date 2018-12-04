import React from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { incrementCounter, decrementCounter } from './actions'
import messages from './messages'

import headerImg from "../../assets/doc-header.jpg"
import video from "../../assets/disaster.mp4"
import H1 from "../../components/H1"
import P from "../../components/P"
import Card from "../../components/Card"
import Tooltip from "../../components/Tooltip"
import FullscreenVideo from "../../components/FullscreenVideo"
import Button from "../../components/Button"

import "./style.css"

import reducer from "./reducer"
import registerReducer from "../../registerReducer"

// inject the reducer to the app
registerReducer("counter", reducer)

class HomePage extends React.Component {
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
      <FullscreenVideo autoPlay muted loop src={video}>
        <Card className="homepage">
          <H1 className="m-b">
            <FormattedMessage {...messages.title} />
          </H1>
          <P lead="true" className="m-b">
            <FormattedMessage {...messages.body} />
          </P>
          <Button
            className="m-b m-r relative"
            onClick={() => this.decrement()}
          >
            <Tooltip primary="true">
              <FormattedMessage {...messages.decrementTooltip} />
            </Tooltip>
            <FormattedMessage {...messages.decrement} />
          </Button>
          {count}
          <Button
            className="m-b m-l relative"
            primary="true"
            onClick={() => this.increment()}
          >
            <Tooltip secondary="true">
              <FormattedMessage {...messages.incrementTooltip} />
            </Tooltip>
            <FormattedMessage {...messages.increment} />
          </Button>
          <img src={headerImg} alt="Coffeekraken React Boilerplate" />
        </Card>
      </FullscreenVideo>
    )
  }
}

HomePage.defaultProps = {
  increment: null,
  decrement: null,
  count: 0
}

HomePage.propTypes = {
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
)(HomePage)

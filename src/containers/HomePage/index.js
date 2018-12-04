import React from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { incrementCounter, decrementCounter } from "./actions"

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
      <FullscreenVideo autoPlay muted src={video}>
        <Card className="homepage">
          <H1 className="m-b">Coffeekraken React Boilerplate</H1>
          <P lead="true" className="m-b">
            Base HTML files and folder structure with complete build process
            (js, sass, image compression, etc...) built in
          </P>
          <Button
            className="m-b m-r relative"
            onClick={() => this.decrement()}
          >
            <Tooltip primary="true">Decrement the counter</Tooltip>
            Decrement
          </Button>
          {count}
          <Button
            className="m-b m-l relative"
            primary="true"
            onClick={() => this.increment()}
          >
            <Tooltip secondary="true">Increment the counter</Tooltip>
            Increment
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

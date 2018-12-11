import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import messages from './messages'
import getGtagClientId from '../../utils/getGtagClientId'

import FullscreenVideo from '../../components/FullscreenVideo'
import video from '../../assets/disaster.mp4'
import Header from '../Header/Loadable'
import HomePage from '../HomePage/Loadable'
import CounterPage from '../CounterPage/Loadable'
import TodoPage from '../TodoPage/Loadable'

import sharingImg from '../../assets/sharing.png'
import './style.css'

class App extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged()
    }
  }

  onRouteChanged() {
    const gTagClientId = getGtagClientId()
    if (window.gtag && gTagClientId) {
      window.gtag('config', gTagClientId, {
        page_title: document.title,
        page_path: document.location.pathname
      })
    }
  }

  render() {
    const { intl } = this.props
    return (
      <div>
        <Helmet>
          <title>{intl.formatMessage(messages.title)}</title>
          <meta
            name="description"
            content={intl.formatMessage(messages.description)}
          />
          <meta property="og:url" content={document.location.href} />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={intl.formatMessage(messages.title)}
          />
          <meta
            property="og:description"
            content={intl.formatMessage(messages.description)}
          />
          <meta
            property="og:image"
            content={`${document.location.origin}${sharingImg}`}
          />
          <meta name="twitter:url" content={document.location.href} />
          <meta
            name="twitter:title"
            content={intl.formatMessage(messages.title)}
          />
          <meta
            name="twitter:description"
            content={intl.formatMessage(messages.description)}
          />
          <meta
            name="twitter:image:src"
            content={`${document.location.origin}${sharingImg}`}
          />
          <meta itemProp="name" content={intl.formatMessage(messages.title)} />
          <meta
            itemProp="description"
            content={intl.formatMessage(messages.description)}
          />
          <meta
            itemProp="image"
            content={`${document.location.origin}${sharingImg}`}
          />
        </Helmet>
        <Header />
        <FullscreenVideo autoPlay muted loop src={video}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/counter" component={CounterPage} />
            <Route path="/todo" component={TodoPage} />
          </Switch>
        </FullscreenVideo>
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  location: state.router.location
})
export default injectIntl(connect(mapStateToProps)(App))

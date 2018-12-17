import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import axios from 'coffeekraken-ww-axios'

import messages from './messages'
import getGtagClientId from '../../utils/getGtagClientId'
import isServer from '../../utils/isServer'

import FullscreenVideo from '../../components/FullscreenVideo'
import Header from '../Header/Loadable'
import HomePage from '../HomePage/Loadable'
import CounterPage from '../CounterPage/Loadable'
import TodoPage from '../TodoPage/Loadable'

import video from '../../assets/disaster.mp4'
import sharingImg from '../../assets/sharing.png'

export default
@injectIntl
@connect(state => ({
  location: state.router.location
}))
class App extends React.PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/').then(response => {
      console.log('response', response)
    })
  }

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
        {!isServer && (
          <Helmet>
            <title>{intl.formatMessage(messages.title)}</title>
            <meta
              name="description"
              content={intl.formatMessage(messages.description)}
            />
            <meta property="og:url" content={document.location} />
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
            <meta name="twitter:url" content={document.location} />
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
            <meta
              itemProp="name"
              content={intl.formatMessage(messages.title)}
            />
            <meta
              itemProp="description"
              content={intl.formatMessage(messages.description)}
            />
            <meta
              itemProp="image"
              content={`${document.location.origin}${sharingImg}`}
            />
          </Helmet>
        )}
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

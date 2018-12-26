import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import registerReducer from '@/utils/registerReducer'
import messages from './messages'
import reducer from './reducer'
import { setSsrRequestId } from './actions'
import getGtagClientId from '@/utils/getGtagClientId'
import isServer from '@/utils/isServer'
/* sample:start */
import FullscreenVideo from '@/components/FullscreenVideo'
import Header from '@/containers/Header/Loadable'
import HomePage from '@/containers/HomePage/Loadable'
import CounterPage from '@/containers/CounterPage/Loadable'
import TodoPage from '@/containers/TodoPage/Loadable'
import FormPage from '@/containers/FormPage/Loadable'
import video from '@/assets/disaster.mp4'
/* sample:end */
import sharingImg from '@/assets/sharing.png'

registerReducer('app', reducer)

export default
@withRouter
@injectIntl
@connect(
  state => ({
    location: state.router.location
  }),
  dispatch => ({
    setSsrRequestId: ssrRequestId => dispatch(setSsrRequestId(ssrRequestId))
  })
)
class extends React.PureComponent {
  static defaultProps = {
    staticContext: {}
  }

  static propTypes = {
    location: PropTypes.object.isRequired,
    intl: PropTypes.object.isRequired,
    staticContext: PropTypes.object,
    setSsrRequestId: PropTypes.func.isRequired
  }

  componentWillMount() {
    const { setSsrRequestId, staticContext } = this.props
    if (staticContext && staticContext.ssrRequestId) {
      setSsrRequestId(staticContext.ssrRequestId)
    }
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
        {!isServer() && (
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
        {/* sample:start */}
        <Header />
        <FullscreenVideo autoPlay muted loop src={video}>
          {/* sample:end */}
          <Switch>
            {/* sample:start */}
            <Route exact path="/" component={HomePage} />
            <Route path="/counter" component={CounterPage} />
            <Route path="/todo" component={TodoPage} />
            <Route path="/form" component={FormPage} />
            {/* sample:end */}
          </Switch>
          {/* sample:start */}
        </FullscreenVideo>
        {/* sample:end */}
      </div>
    )
  }
}

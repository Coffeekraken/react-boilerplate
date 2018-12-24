import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

import reducer from './reducer'
import registerReducer from '@/utils/registerReducer'

// inject the reducer to the app
registerReducer('language', reducer)

export default
@connect(state => ({
  locale: state.language.locale
}))
class extends React.PureComponent {
  static defaultProps = {
    locale: 'en',
    messages: {}
  }

  static propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object,
    children: PropTypes.element.isRequired
  }

  render() {
    const { locale, messages, children } = this.props
    return (
      <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    )
  }
}

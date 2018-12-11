import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import messages from './messages'

import { locales } from '../../i18n'
import { changeLocale } from '../LanguageProvider/actions'

class Header extends React.PureComponent {
  changeLocale(locale) {
    const { changeLocale } = this.props
    changeLocale(locale)
  }

  render() {
    return (
      <header className="header">
        <nav className="header__nav header__nav--main">
          <ul className="nav nav--inline">
            <li className="nav__item">
              <NavLink to="/" exact>
                <FormattedMessage {...messages.home} />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/counter" exact>
                <FormattedMessage {...messages.counter} />
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/todo" exact>
                <FormattedMessage {...messages.todo} />
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="header__nav header__nav--locale">
          <ul className="nav nav--inline">
            {locales.map(locale => (
              <li key={locale} className="nav__item">
                <button type="button" onClick={() => this.changeLocale(locale)}>
                  {locale.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}

Header.defaultProps = {}

Header.propTypes = {
  changeLocale: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  location: state.router.location,
  locale: state.language.locale
})
const mapDispatchToProps = dispatch => ({
  changeLocale: locale => dispatch(changeLocale(locale))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

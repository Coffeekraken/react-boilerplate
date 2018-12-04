import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { locales } from '../../i18n'
import { changeLocale } from '../LanguageProvider/actions'

import './style.css'

class Header extends React.PureComponent {
  changeLocale(locale) {
    const { changeLocale } = this.props
    changeLocale(locale)
  }

  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="nav nav--inline">
            {locales.map((locale) => (
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

Header.defaultProps = {
}

Header.propTypes = {
  changeLocale: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
  changeLocale: (locale) => dispatch(changeLocale(locale))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

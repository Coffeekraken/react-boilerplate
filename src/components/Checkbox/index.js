import React from 'react'
import uniqid from 'uniqid'

// import './style.css'

class Checkbox extends React.PureComponent {
  onChange(e) {
    const { onChange } = this.props
    onChange && onChange(e)
  }

  render() {
    const { onChange, className, id, ...others } = this.props
    const forId = id || uniqid()
    return (
      <label className={`checkbox ${className}`} htmlFor={forId}>
        <input
          id={forId}
          type="checkbox"
          className="checkbox__input"
          onChange={e => this.onChange(e)}
          {...others}
        />
        <div className="checkbox__display" />
      </label>
    )
  }
}

export default Checkbox

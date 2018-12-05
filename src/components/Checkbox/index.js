import React from 'react'

import './style.css'

class Checkbox extends React.PureComponent {
  onChange(e) {
    const { onChange } = this.props
    onChange && onChange(e)
  }

  render() {
    const { onChange, className, ...others } = this.props
    return (
      <label className={'checkbox ' + className}>
        <input
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

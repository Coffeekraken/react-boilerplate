import React from 'react'

class Button extends React.PureComponent {
  render() {
    const { className, children, ...others } = this.props
    const { primary, secondary, outline, link } = this.props

    const cn = ['btn', className]
    if (primary) cn.push('btn--primary')
    if (secondary) cn.push('btn--secondary')
    if (outline) cn.push('btn--outline')
    if (link) cn.push('btn--link')

    return (
      <button type="button" className={cn.join(' ')} {...others}>
        {children}
      </button>
    )
  }
}

export default Button

import React from 'react'

class Tooltip extends React.PureComponent {
  render() {
    const { className, primary, secondary, children, ...others } = this.props
    const cn = ['tooltip', className]
    if (primary) cn.push('tooltip--primary')
    if (secondary) cn.push('tooltip--secondary')
    return (
      <span className={cn.join(' ')} {...others}>
        {children}
      </span>
    )
  }
}

export default Tooltip

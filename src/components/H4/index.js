import React from 'react'

class H4 extends React.PureComponent {
  render() {
    const { className, children, ...others } = this.props
    return (
      <h4 className={`h4 ${className}`} {...others}>
        {children}
      </h4>
    )
  }
}

export default H4

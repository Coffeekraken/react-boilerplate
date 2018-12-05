import React from 'react'

class H3 extends React.PureComponent {
  render() {
    const { className, children, ...others } = this.props
    return (
      <h3 className={`h3 ${className}`} {...others}>
        {children}
      </h3>
    )
  }
}

export default H3

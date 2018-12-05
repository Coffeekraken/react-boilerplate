import React from 'react'

class H1 extends React.PureComponent {
  render() {
    const { className, children, ...others } = this.props
    return (
      <h1 className={`h1 ${className}`} {...others}>
        {children}
      </h1>
    )
  }
}

export default H1

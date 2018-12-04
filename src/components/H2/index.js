import React from "react"

class H2 extends React.PureComponent {
  render() {
    const { className, children, ...others } = this.props
    return (
      <h2 className={`h2 ${className}`} {...others}>
        {children}
      </h2>
    )
  }
}

export default H2

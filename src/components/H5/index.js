import React from "react"

class H5 extends React.PureComponent {
  render() {
    const { className, children, ...others } = this.props
    return (
      <h5 className={`h5 ${className}`} {...others}>
        {children}
      </h5>
    )
  }
}

export default H5

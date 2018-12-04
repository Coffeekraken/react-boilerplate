import React from "react"

class P extends React.PureComponent {
  render() {
    const { className, children, lead, ...others } = this.props
    const cn = ["p", className]
    if (lead) cn.push("p--lead")
    return (
      <p className={cn.join(" ")} {...others}>
        {children}
      </p>
    )
  }
}

export default P

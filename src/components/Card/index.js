import React from "react"
import "./style.css"

export default class Card extends React.PureComponent {
  render() {
    const { className, children, ...others } = this.props
    return (
      <div className={["card", className].join(" ")} {...others}>
        {children}
      </div>
    )
  }
}

import React from "react"
import "./style.css"

class FullscreenVideo extends React.PureComponent {
  render() {
    const { children } = this.props
    return (
      <div>
        <video className="fullscreen-video__video" {...this.props} />
        {children}
      </div>
    )
  }
}

export default FullscreenVideo

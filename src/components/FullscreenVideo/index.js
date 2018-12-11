import React from 'react'

class FullscreenVideo extends React.PureComponent {
  render() {
    const { children, ...others } = this.props
    return (
      <div>
        <video className="fullscreen-video__video" {...others} />
        {children}
      </div>
    )
  }
}

export default FullscreenVideo

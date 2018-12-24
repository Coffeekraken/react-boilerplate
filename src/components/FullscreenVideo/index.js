import React from 'react'

class FullscreenVideo extends React.PureComponent {
  render() {
    const { children, src, ...others } = this.props
    return (
      <div>
        {typeof src === 'string' && (
          <video className="fullscreen-video__video" src={src} {...others} />
        )}
        {children}
      </div>
    )
  }
}

export default FullscreenVideo

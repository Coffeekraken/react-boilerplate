import React from 'react'

class FullscreenVideo extends React.PureComponent {
  render() {
    const { children, ...others } = this.props
    return (
      <div>
        {typeof this.props.src === 'string' && (
          <video className="fullscreen-video__video" {...others} />
        )}
        {children}
      </div>
    )
  }
}

export default FullscreenVideo

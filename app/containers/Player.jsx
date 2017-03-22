import React, {Component} from 'react'
import {connect} from 'react-redux'
import YouTube from 'react-youtube'

var socket = io(window.location.origin)

class Player extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const playerOptions = {
      // width: window.innerWidth - 30,
      // height: window.innerHeight - 130,
      playerVars: {
        autoplay: 0,
        cc_load_policy: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showInfo: 0
      }
    }
    
    return (
      <YouTube
        videoId={this.props.queue.length ? this.props.queue[0].id.videoId : null}
        opts={playerOptions}
        onReady={event => {
          console.log('VIDEO READY: ',event.target)
          socket.emit(this.props.direction == 'left' ? 'leftVideoReady' : 'rightVideoReady')
        }}
        onStateChange={event => {
          console.log('VIDEO STATE CHANGE: ',event.target)
        }}
      />
    )   
  }
}

const mapStateToProps = (state, ownProps) => ({
  queue: state[`queue${ownProps.direction}`],
  // player: state[`player${ownProps.direction}`]
})

// const mapDispatchToprops = ()

export default connect(mapStateToProps)(Player)

// id={string}
// className={string}
// onReady={func}
// onPlay={func}
// onPause={func}
// onEnd={func}
// onError={func}
// onStateChange={func}
// onPlaybackRateChange={func}
// onPlaybackQualityChange={func}

// get player state:
//-1 (unstarted)
// 0 (ended)
// 1 (playing)
// 2 (paused)
// 3 (buffering)
// 5 (video cued)
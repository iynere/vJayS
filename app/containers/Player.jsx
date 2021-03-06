// node modules
import $ from 'jquery'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import YouTube from 'react-youtube'

// local files
import {addToSet} from 'APP/app/reducers/set'
import {removeFromQueue} from 'APP/app/reducers/queue'


var socket = io(window.location.origin)

class Player extends Component {
  constructor(props) {
    super(props)
    let Direction = props.direction
    this.state = {
      [`video${Direction}`]: {}
    }

    this.handlePlayerStateChange = this.handlePlayerStateChange.bind(this)
    this.handlePlayerReady = this.handlePlayerReady.bind(this)
    this.handleVideoPlay = this.handleVideoPlay.bind(this)
    this.handleVideoPause = this.handleVideoPause.bind(this)
    this.handlePlaybackRateChange = this.handlePlaybackRateChange.bind(this)
    this.handleVideoEnd = this.handleVideoEnd.bind(this)
    this.handleVolumeChange=this.handleVolumeChange.bind(this)
  }

  componentDidMount() {
    socket.on('changeVideoHue', (hueRotation, direction) => {
      $(document).ready(() => {
        
        // 0-360
        // console.log("Current CSS!", currentCSS)
        // 'hue-rotate(XXdeg) invert(XX%) saturate(XX%)'
        
        let currentCSS = $(`.${direction}Deck.filters`).css('filter').split(' '),
        
          newCSS = currentCSS.map((filter, idx) => 
              idx === 0 ? `hue-rotate(${hueRotation}deg)` : filter).join(' ')
          
        $(`.${direction}Deck.filters`).css('filter', newCSS)
      })
    })


    socket.on('changeVideoInvert', (invertPercent, direction) => {
      $(document).ready(() => {
        
        // 0-100
        // console.log("Current CSS!", currentCSS)
        // 'hue-rotate(XXdeg) invert(XX%) saturate(XX%)'
        
        let currentCSS = $(`.${direction}Deck.filters`).css('filter').split(' '),
        
          newCSS = currentCSS.map((filter, idx) => 
              idx === 1 ? `invert(${invertPercent}%)` : filter).join(' ')
          
        $(`.${direction}Deck.filters`).css('filter', newCSS)
      })
    })

    socket.on('changeVideoSaturate', (saturatePercent, direction) => {
      $(document).ready(() => {
        
        // 0-100-over100
        // console.log("Current CSS!", currentCSS)
        // 'hue-rotate(XXdeg) invert(XX%) saturate(XX%)'
        
        let currentCSS = $(`.${direction}Deck.filters`).css('filter').split(' '),
        
          newCSS = currentCSS.map((filter, idx) => 
              idx === 2 ? `saturate(${saturatePercent}%)` : filter).join(' ')
          
        $(`.${direction}Deck.filters`).css('filter', newCSS)
      })
    })
  }

  handlePlayerReady(event) {
    let Direction = this.props.direction,
      cueTime = event.target.getCurrentTime(),
      videoToEmit = this.props.queue.length ? this.props.queue[0].id.videoId : ''

      this.setState({[`video${Direction}`]: event.target})


    socket.on('outputReadyForPlayerVideos', () => {
      socket.emit(`sendCueTimeToOutput${Direction}`, cueTime,)
    })

    /*socket listeners for dj video controls*/
    socket.on('playBothVideos', (playing) => {
      playing === 0 ? event.target.pauseVideo() : event.target.playVideo()
    })

    socket.on('skipVideo', (direction) => {
      if(direction === Direction){
        this.handleVideoEnd(event);
      }
    })

    socket.on('updatePlaybackRate', (newRate) => {
     console.log('FROM TAPS', newRate)
     event.target.setPlaybackRate(newRate)
    })

    socket.on('changeVideosVolume', (newVol) => {
      console.log("Changing the volume", newVol)
      this.handleVolumeChange(newVol, event.target);
    })
    
    // 'ready' refers to iframe, not video
    // need to reset playback quality for each new video
    setTimeout(() => {
      event.target.pauseVideo()
      event.target.setPlaybackQuality('small')
    }, 200)

    socket.emit(`playerMounted${Direction}`, videoToEmit)
    
    // event.target.loadVideoById(this.props.queue[0].id.videoId, event.target.getCurrentTime(), 'small')
    
    // setTimeout(() => {
    //  event.target.pauseVideo()
    // }, 2)
  }

  handleVideoPlay(event) {
    // console.log('testing')
    setTimeout(() => {
      event.target.setPlaybackQuality('small')  
    }, 100)
    
    let Direction = this.props.direction,
      cueTime = event.target.getCurrentTime()
    socket.emit(`playingVideo${Direction}`, cueTime)
  }

  handleVideoPause(event) {
    let Direction = this.props.direction,
      newCueTime = event.target.getCurrentTime()
    socket.emit(`pausingVideo${Direction}`, newCueTime)
  }

  handlePlaybackRateChange(event) {
    let Direction = this.props.direction,
      newRate = event.data

    // console.log(newRate)

    socket.emit(`changingVideo${Direction}PlaybackRate`, newRate)
  }

  handleVolumeChange(newVol, video){
    let Direction= this.props.direction

    if(Direction === "Right"){
      if (newVol <= 100) {
        this.state[`video${Direction}`].setVolume(newVol)
      }
    } else {
      if (newVol > 100) {
        this.state[`video${Direction}`].setVolume(200-newVol)
      }else if(newVol === 100){
        this.state[`video${Direction}`].setVolume(100)
      }
    }

  }

  handleVideoEnd(event) {
    event.target.setPlaybackRate(1)
    // console.log('END EVENT: ',event)
    let video = this.state[`video${this.props.direction}`],
      setItem = {
        "direction": this.props.direction,
        "videoId": this.props.queue[0].id.videoId,
        "title": this.props.queue[0].snippet.title,
        "thumbnailUrl": this.props.queue[0].snippet.thumbnails.default.url
      }

    // console.log(this.state)
    // console.log('SET ITEM: ', setItem)
    // console.log("props direction", this.props.direction)

    this.props.addToSet(setItem)
    this.props.removeFromQueue(0, `queue${this.props.direction}`)
  }

  handlePlayerStateChange(event) {
    let Direction = this.props.direction

    console.log('reinitializing',event)
  }

  render() {
    let queue = this.props.queue,
      playerOptions = {
      width: window.innerWidth / 2,
      // height: window.innerHeight - 130,
      playerVars: {
        autoplay: 1,
        cc_load_policy: 0,
        controls: 1,
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
          videoId={queue && queue.length ? queue[0].id.videoId : ''}
          opts={playerOptions}
          onReady={this.handlePlayerReady}
          onPlay={this.handleVideoPlay}
          onPause={this.handleVideoPause}
          onPlaybackRateChange={this.handlePlaybackRateChange}
          onEnd={this.handleVideoEnd}
          onStateChange={this.handlePlayerStateChange}
        />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  queue: state.queue[`${ownProps.direction}`],
  set: state.set
})

const mapDispatchToProps = dispatch => ({
  addToSet: setItem => {
    dispatch(addToSet(setItem))
  },
  removeFromQueue: (videoId, direction) => {
    dispatch(removeFromQueue(videoId, direction))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Player)

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

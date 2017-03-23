import React, {Component} from 'react'
import {connect} from 'react-redux'
import YouTube from 'react-youtube'

var socket = io(window.location.origin)

class Player extends Component {
	constructor(props) {
		let Direction = props.direction
		super(props)
		this.state = {
			[`video${Direction}`]: {}
		}
		
		this.reinitializeVideo = this.reinitializeVideo.bind(this)
	}
	
	componentDidMount() {
		let Direction = this.props.direction,
			videoToLoad = this.props.queue[0].id.videoId
		
		socket.on('connect', () => {
			// console.log('player socket is here!')
		})
		
		socket.on('outputReadyForPlayerVideos', () => {
			
			let videoToEmit = videoToLoad
			
			socket.emit(`playerMounted${Direction}`, videoToEmit)
		})
	}
	
	reinitializeVideo(event) {
		let Direction = this.props.direction
		// console.log(event.target)
		
		this.setState({
			[`video${Direction}`]: event.target
		})
	}

	render() {
		let Direction = this.props.direction,
			queue = this.props.queue,
			playerOptions = {
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
				videoId={queue.length ? queue[0].id.videoId : ''}
				opts={playerOptions}
				onReady={event => {
					this.reinitializeVideo(event)
					
					let videoToEmit = queue[0].id.videoId
					
					// console.log('VIDEO THAT WE EMIT', videoToEmit)
					
					socket.emit(`playerMounted${Direction}`, videoToEmit)
				}}
				onPlay={event => {
					this.reinitializeVideo(event)
					
					socket.emit(`playingVideo${Direction}`)
				}}
				onStateChange={this.reinitializeVideo}
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
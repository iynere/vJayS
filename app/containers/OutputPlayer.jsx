import React, {Component} from 'react'
import {connect} from 'react-redux'
import YouTube from 'react-youtube'

var socket = io(window.location.origin)

class OutputPlayer extends Component {
	constructor(props) {
		let Direction = props.direction
		super(props)
		this.state = {
			[`video${Direction}`]: {},
			[`video${Direction}Id`]: ''
		}
		this.reinitializeVideo = this.reinitializeVideo.bind(this)
	}
	
	componentDidMount() {
		let Direction = this.props.direction
		socket.on('connect', () => {
			// console.log('output socket is live!')
			socket.emit('outputScreenMounted')
		})
		
		socket.on(`sendVideo${Direction}ToOutput`, videoId => {
			// console.log(`${Direction}: `, videoId)
			this.setState({
				[`video${Direction}Id`]: videoId
			})
		})
		
		socket.on(`playOutputVideo${Direction}`, newCueTime => {
			// console.log('gettin here?')
			this.state[`video${Direction}`].seekTo(newCueTime)
			this.state[`video${Direction}`].playVideo()
		})
		
		socket.on(`pauseOutputVideo${Direction}`, newCueTime => {
			// console.log('gettin here?')
			this.state[`video${Direction}`].seekTo(newCueTime)
			this.state[`video${Direction}`].pauseVideo()
		})
		
		socket.on(`changeOutputVideo${Direction}PlaybackRate`, newRate => {
				this.state[`video${Direction}`].setPlaybackRate(newRate)
		})
		
		socket.on('clearOutputVideos', () => {
			this.setState({
				[`video${Direction}Id`]: ''
			})
		})
	}
	
	reinitializeVideo(event) {
		event.target.setPlaybackQuality('small')
		event.target.setVolume(0)
		let Direction = this.props.direction
		this.setState({
			[`video${Direction}`]: event.target
		})
		// console.log(event.target)
	}
	
	render() {
		let Direction = this.props.direction
		const playerOptions = {
			width: window.innerWidth,
			height: window.innerHeight,
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
				opts={playerOptions}
				videoId={this.state[`video${Direction}Id`] ? this.state[`video${Direction}Id`] : ''}
				onReady={this.reinitializeVideo}
				onStateChange={this.reinitializeVideo}
			/>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	player: state[`queue${ownProps.direction}`],
	queue: state[`player${ownProps.direction}`]
})

export default connect(mapStateToProps)(OutputPlayer)

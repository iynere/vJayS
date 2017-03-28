import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setCommand} from '../reducers/command'
import {Link} from 'react-router'
import SliderComponent from 'APP/app/components/SliderComponent'

/*DJ TO MOBILE CONTROLS*/

var socket = io(window.location.origin)

class Controller extends Component {
	constructor(){
		super()
		this.commandType=this.commandType.bind(this)
		this.handleWhiteButton = this.handleWhiteButton.bind(this)
		this.handleEmoticonsButton = this.handleEmoticonsButton.bind(this)
		this.handleTapButton = this.handleTapButton.bind(this)
	}

	componentDidMount() {
		socket.on('connect', () => {
			socket.on('getCommandType', () => {
				console.log("get emoticons", this.props.command)
				socket.emit("sendCommand", this.commandType())
			})
		})
	}

	commandType(){ //needed for mobile initial loading
		if(this.props.command === "emoticons"){
			return "emoticons"
		}

		return "touchpad"
	}

	handleClearButton(){
		socket.emit("clearButtonClicked")
	}

	handleWhiteButton(){
		console.log("controller click white")
		this.props.handleSetCommand("white")
		let commandType="touchpad"
		socket.emit('clickedWhiteEllipse', commandType)
	}

	handleEmoticonsButton(){
		console.log("controller click emoticons")
		this.props.handleSetCommand("emoticons")
		let commandType="emoticons"
		socket.emit('clickedEmoticons', commandType)
	}

	handleTapButton() {
		this.props.handleSetCommand("tap")
		let commandType="tap"
		socket.emit('clickedTap', commandType)
	}

	render() {
		return (
			<div className="dj2MobileControls">
				<h2>Audience Interactions</h2>
				<div className="dj2MobileButtons">
					<button onClick={this.handleWhiteButton}>Draw</button>
					<button onClick={this.handleEmoticonsButton}>Emoticons</button>
					<button onClick={this.handleTapButton}>Tap</button>
					<button onClick={this.handleClearButton}>Clear</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps=state => {
  return {
    command: state.command
  }
}

const mapDispatchToProps=dispatch => {
  return {
    handleSetCommand (command) {
      return dispatch(setCommand(command))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);

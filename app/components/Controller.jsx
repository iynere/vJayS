import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setCommand} from '../reducers/command'
import {Link} from 'react-router'

// from state: liveEffect

var socket = io(window.location.origin)

class Controller extends Component {

	constructor(){
		super()
		this.commandType=this.commandType.bind(this)
		this.handleWhiteButton = this.handleWhiteButton.bind(this)
		this.handleColorButton = this.handleColorButton.bind(this)
		this.handleSnakeButton = this.handleSnakeButton.bind(this)
		this.handleEmoticonsButton = this.handleEmoticonsButton.bind(this)
	}

	componentDidMount() {
		socket.on('connect', () => {
			console.log("~~~Getting the socket to work in this component!~~~~~")

			//sends commandtype to mobile
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

	handleColorButton(){
		console.log("controller click color")
		this.props.handleSetCommand("color")
		let commandType="touchpad"
		socket.emit('clickedColorEllipse',commandType)
	}

	handleSnakeButton(){
		console.log("controller click snake")
		this.props.handleSetCommand("snake")
		let commandType="touchpad"
		socket.emit('clickedSnake', commandType)
	}

	handleEmoticonsButton(){
		console.log("controller click emoticons")
		this.props.handleSetCommand("emoticons")
		let commandType="emoticons"
		socket.emit('clickedEmoticons', commandType)
	}

	render() {
		console.log("command current", this.props.command);
		return (
			<div>
				<h4>Controllerrrr</h4>
				<button onClick={this.handleWhiteButton}>White Ellipse</button>
				<button onClick={this.handleColorButton}>Color Ellipse</button>
				<button onClick={this.handleSnakeButton}>Snake</button>
        <button onClick={this.handleClearButton}>Clear</button>
				<button onClick={this.handleEmoticonsButton}>Emoticons</button>
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

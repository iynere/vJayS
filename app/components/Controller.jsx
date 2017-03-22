import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setCommand} from '../reducers/command'
import {Link} from 'react-router'

// from state: liveEffect

var socket = io(window.location.origin)

class Controller extends Component {

	constructor(){
		super()
		this.handleWhiteButton = this.handleWhiteButton.bind(this)
		this.handleColorButton = this.handleColorButton.bind(this)
		this.handleSnakeButton = this.handleSnakeButton.bind(this)
	}

	componentDidMount() {

	}

  handleClearButton(){
    socket.emit("clearButtonClicked")
  }

	handleWhiteButton(){
		console.log("controller click white")
		this.props.handleSetCommand("white")
		socket.emit('clickedWhiteEllipse')
	}

	handleColorButton(){
		console.log("controller click color")
		this.props.handleSetCommand("color")
		socket.emit('clickedColorEllipse')
	}

	handleSnakeButton(){
		console.log("controller click snake")
		this.props.handleSetCommand("snake")
		socket.emit('clickedSnake')
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
				<Link to="/mainscreen">to MainScreen</Link>
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

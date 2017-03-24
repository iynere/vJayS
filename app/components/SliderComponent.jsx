import React, { Component } from 'react'
import {connect} from 'react-redux'

const socket = io(window.location.origin)

export default class SliderComponent extends Component {
	constructor() {
		super()

		// this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		//Insert socket events here
	}

	// handleChange(event) {
	// 	socket.emit('movingSlider', event.target.value)
	// 	console.log("at slider component handle change", event.target.value)
	// 	// does the slider have an event??
	// }

	render() {
		return(
			<div className="mobileComponent">
				<input className="slider" type="range" onChange={this.props.handleChange}/>
			</div>
		)
	}
}

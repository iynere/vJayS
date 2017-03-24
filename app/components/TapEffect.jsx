import React, { Component } from 'react'

var socket = io(window.location.origin)

export default class TapEffect extends Component {
	constructor() {
		super()
	}

	componentDidMount() {
		socket.on('updateTapValue', () => {
			console.log("GETTING THE TAPS!!")
		})
	}

	render() {
		return (
			<div>
				<h4>Tap effect c
				omponent!!</h4>
			</div>
		)
	}


}
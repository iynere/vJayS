import React, { Component } from 'react'
import {connect} from 'react-redux'

export class SliderComponent extends Component {
	constructor() {
		super()

		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		//Insert socket events here
	}

	handleChange() {
		console.log("boop")
	}

	render() {
		return(
			<div className="mobileComponent">
				{/*<EmojiPicker />*/}
				<input className="slider" type="range" onChange={this.handleChange}/>
			</div>
		)
	}
}
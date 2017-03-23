import React, { Component } from 'react'
import {connect} from 'react-redux'
import Twemoji from 'react-twemoji'

export class EmojiComponent extends Component {
	constructor() {
		super()

		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		//Insert socket events here
	}

	handleChange(e) {
		console.log("boop")
		console.log("Emoji chosen", e)
	}

	render() {
		return(
			<div className="mobileComponent">
				<Twemoji>
					<p onClick={this.handleChange}>😚</p>
					<p>😉</p>
				</Twemoji>
				{/*<EmojiPicker onChange={this.handleChange}/>*/}
			</div>
		)
	}
}
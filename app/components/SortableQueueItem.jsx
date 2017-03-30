import React, { Component } from 'react'
import { Button, Dimmer, Image, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {removeFromQueue, moveToFront} from 'APP/app/reducers/queue'

class SortableQueueItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
		};
	}
	
	handleShow() {
		this.setState({ active: true })
	}
	
	handleHide() {
		this.setState({ active: false })
	}

	onClickPlay() {
		// console.log(this.props)
		if (this.props.direction === 'Left') {
			this.props.moveToFront(this.props.index, 'queueLeft')
		} else {
			this.props.moveToFront(this.props.index - 2 * this.props.queueLeft.length, 'queueRight')
		}
		
	}

	onClickRemove() {
		// console.log(this.props)
		if (this.props.direction === 'Left') {
			this.props.removeFromQueue(this.props.index, 'queueLeft')
		} else {
			this.props.removeFromQueue(this.props.index - 2 * this.props.queueLeft.length, 'queueRight')
		}
		
	}
	
	render() {
		var headerStyle = {
			color: "#fff",
			paddingBottom: 0,
			marginBottom: "3px",
			marginTop: 0,
			MozUserSelect: 'none',
			WebkitUserSelect: 'none',
			msUserSelect: 'none'   
		}

		var dimDivStyle = {
			paddingTop: 0,
		}
		
		const { active } = this.state
		const content = (
			<div style={dimDivStyle}>
				<p style={headerStyle}>{this.props.video.snippet.title.slice(0,36)}</p>
				
				<Button className="red mini circular icon" onClick={this.onClickRemove.bind(this)}><Icon name="remove"/></Button>
				<Button className="green mini circular icon" onClick={this.onClickPlay.bind(this)}><Icon name="play"/></Button>
			</div>
		)

		return (
			<Dimmer.Dimmable
				as={Image}
				dimmed={active}
				dimmer={{ active, content }}
				onMouseEnter={this.handleShow.bind(this)}
				onMouseLeave={this.handleHide.bind(this)}
				src={this.props.video.snippet.thumbnails.default.url}
			/>
		)
	}
}


const mapStateToProps = state => ({
	queueLeft: state.queue['Left'],
	queueRight: state.queue['Right']
});

const mapDispatchToProps = dispatch => ({
	removeFromQueue: (videoIdx, direction) => {
		dispatch(removeFromQueue(videoIdx, direction))
	},
	moveToFront: (videoIdx, direction) => {
		dispatch(moveToFront(videoIdx, direction))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableQueueItem);

import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { List } from 'semantic-ui-react';
import SortableQueueItem from './SortableQueueItem';
import {removeFromQueue, insertQueueItem} from 'APP/app/reducers/queue';
import { connect } from 'react-redux'

class SortableQueue extends Component {
	constructor(props) {
		let Direction = props.direction
		super(props)
		this.state = {
			queue: props.queue
		} 
		this.onSortEnd = this.onSortEnd.bind(this)
	}

	onSortEnd({oldIndex, newIndex}) {
		console.log('Old index:', oldIndex);
			console.log('New index:', newIndex);
		
		let video = this.props.queue[oldIndex]
		this.props.removeFromQueue(oldIndex, `queue${this.props.direction}`)
		this.props.insertQueueItem(video, newIndex, `queue${this.props.direction}`)
		this.setState({
			queue: arrayMove(this.props.queue, oldIndex, newIndex)
		})
 };

	render() {
		const listItemStyle = {
			maxWidth: "120px",
			verticalAlign: "top",
			wordWrap: "break-word",
			whiteSpace: "normal",
		}

		const SortableItem = SortableElement(({value, idx}) => {
			// console.log(idx)
			return (
				<List.Item style={listItemStyle}>
					<SortableQueueItem
						video={value}
						style={{wordWrap: "break-word", whiteSpace: "normal"}}
						direction={this.props.direction}
						index={idx}
					/>      
				</List.Item>
			)
		});

		const SortableList = SortableContainer(({videos}) => {
			return (
				<List horizontal style={{whiteSpace: "nowrap", overflowX: "auto", overflowY: "hidden"}}>
					{videos.map((value, index) => {
						return (
						<SortableItem
							key={`item-${index}`}
							idx={index}
							index={index}
							value={value} 
						/>
					)})}
				</List>
			);
		});
		
		return (
			<SortableList
				axis="x"
				videos={this.props.queue} 
				onSortEnd={this.onSortEnd}
				distance={30}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	queue: state.queue[`${ownProps.direction}`]
});

const mapDispatchToProps = dispatch => ({
	removeFromQueue: (videoIdx, direction) => {
		dispatch(removeFromQueue(videoIdx, direction))
	},
	insertQueueItem: (video, newIdx, direction) => {
		dispatch(insertQueueItem(video, newIdx, direction))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SortableQueue);

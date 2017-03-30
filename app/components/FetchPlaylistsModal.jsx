import React, {Component} from 'react'
import localStore from 'store'
import {connect} from 'react-redux'
import {Button, List, Dropdown, Modal} from 'semantic-ui-react'
import {fetchUserPlaylists, fetchSelectedPlaylist} from 'APP/app/reducers/playlists'

class FetchPlaylistsModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			modalOpen: false
		}

		this.handleModalOpen = this.handleModalOpen.bind(this)
		this.handleModalClose = this.handleModalClose.bind(this)
	}

	handleModalOpen(event) {
		event.preventDefault()
		this.props.fetchUserPlaylists(this.props.user.id)
		this.setState({
			modalOpen: true,
		})
	}

	handleModalClose(event) {
		event.preventDefault()
		this.setState({
			modalOpen: false,
		})
	}

	handleClick(boundPlaylistIdEvent) {
		// console.log('CLICK EVENT: ',event)
		this.props.fetchSelectedPlaylist(this.props.user.id, boundPlaylistIdEvent)
		this.setState({
			modalOpen: false,
		})
	}

	render() {
		let playlists
		if (this.props.playlists.userPlaylists && this.props.playlists.userPlaylists.length) {
			
			// save playlists variable as mapped List Items from the playlists array
			playlists = this.props.playlists.userPlaylists.map(playlistItem => {
				
				let boundItemClick = this.handleClick.bind(this, playlistItem.id)

				return (
					<List.Item key={playlistItem.id} onClick={boundItemClick}>
						{playlistItem.snippet.title}
					</List.Item>
				)
			})
		}

		return (
			<Modal
				trigger={
					<Dropdown.Item
						onClick={this.handleModalOpen}>
						Import a YouTube Playlist
					</Dropdown.Item>
				}
				open={this.state.modalOpen}
				onClose={this.handleModalClose}
				basic size='small'>
				<Modal.Content>
				<div>
					<h4>Select a YouTube Playlist</h4>
					<List selection inverted onClick={null /*this.handleClick*/}>
						{playlists ? playlists : null}
					</List>
				</div>
			</Modal.Content>
			<Modal.Actions style={{textAlign:"left"}}>
				{/*<Button onClick={this.handleClose}>Load Set</Button>*/}
			</Modal.Actions>
			</Modal>
		)
	}
}

const mapStateToProps = ({auth, playlists}) => {
	return ({
		user: auth,
		playlists
	})
}

const mapDispatchToProps = dispatch => ({
	fetchUserPlaylists: userId => dispatch(fetchUserPlaylists(userId)),
	fetchSelectedPlaylist: (userId, playlistId) => dispatch(fetchSelectedPlaylist(userId, playlistId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchPlaylistsModal)

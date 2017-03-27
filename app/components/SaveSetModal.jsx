import React, { Component } from 'react'
import {connect} from 'react-redux'
import {saveSetToDb} from '../reducers/sets'
import localStore from 'store'
import { Form, Button, Header, Icon, Modal } from 'semantic-ui-react'

class SaveSetModal extends Component {
	constructor(props) {
		super(props)

		this.state={
			setName: "",
      modalOpen:false
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event){
		this.setState({setName: event.target.value})
	}

  handleOpen = (e) => {
    e.preventDefault()
    this.setState({
      modalOpen: true,
    })
  }

  handleClose = (e) => {
    e.preventDefault
    this.setState({
      modalOpen: false,
    })
  }

	handleSubmit(event) {
		event.preventDefault()
		const videos = localStore.get('set')
		const setToSave = {"name": this.state.setName, "videos": videos, "user_id": this.props.user.id}
		this.props.saveSetToDb(setToSave)
    this.setState({
      modalOpen: false,
    })
	}

	render() {
		return (
      <Modal trigger={<Button  onClick={this.handleOpen}>Save Set</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic size='small'
        closeIcon='close'>
        <Modal.Actions>
  			<div>
  				<Form onSubmit={this.handleSubmit}>
  					<Form.Field>
  						<input type="text" placeholder="Set Name" onChange={this.handleChange} value={this.state.setName}/>
  					</Form.Field>
  				{/*You can move button into form field if you'd like*/}
  					<Button type='submit'>Save Set</Button>
  				</Form>
  			</div>
      </Modal.Actions>
      </Modal>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth
	}) //UserID
}

const mapDispatchToProps = (dispatch) => ({
	saveSetToDb: (set) => { dispatch(saveSetToDb(set)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveSetModal)

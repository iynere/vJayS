import React, { Component } from 'react'
import {connect} from 'react-redux'
import {saveSetToDb} from '../reducers/sets'
import { Button, Form } from 'semantic-ui-react'
import localStore from 'store'

class SaveSet extends Component {
	constructor(props) {
		super(props)

		this.state={
			setName: ""
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event){
		this.setState({setName: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault()
		const videos = localStore.get('set')
		const setToSave = {"name": this.state.setName, "videos": videos, "user_id": this.props.user.id}
		this.props.saveSetToDb(setToSave)
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<input type="text" placeholder="Set Name" onChange={this.handleChange} value={this.state.setName}/>
					</Form.Field>
				{/*You can move button into form field if you'd like*/}
					<Button type='submit'>Save Set</Button>
				</Form>
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SaveSet)











import React, { Component } from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'
import {fetchAllSetsFromDb} from '../reducers/set'

class FetchSets extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// this.props.fetchAllSetsFromDb()
		console.log("User ID:", this.props)
	}

	render() {
		// const userId = this.props.user.id
		// const sets = this.props.fetchAllSetsFromDb(userId)
		return(
			<h4>BOOP FETCHING SETS</h4>
			//Link to sets
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth
	}) //UserID
}

const mapDispatchToProps = (dispatch) => ({
	fetchAllSetsFromDb: (userId) => { dispatch(fetchAllSetsFromDb(userId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchSets)


// component did mount?? or onEnterHook?
// get sets -> list sets
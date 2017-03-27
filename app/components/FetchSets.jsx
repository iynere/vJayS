import React, { Component } from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'
import {fetchAllSetsFromDb} from '../reducers/set'

export default class FetchSets extends Component {
	constructor() {
		super()
	}

	render() {
		return(
			<h4>BOOP FETCHING SETS</h4>
			//Link to sets
		)
	}
}

const mapStateToProps = (state) => {
	return ({}) //UserID
}

const mapDispatchToProps = (dispatch) => ({
	fetchAllSetsFromDb: (userId) => { dispatch(fetchAllSetsFromDb(userId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveSet)


// component did mount?? or onEnterHook?
// get sets -> list sets
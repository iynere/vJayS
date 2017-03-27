import React, { Component } from 'react'
import {connect} from 'react-redux'
import { List } from 'semantic-ui-react'
import {fetchAllSetsFromDb} from '../reducers/sets'

class FetchSets extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		console.log("User ID:", this.props)
		this.props.fetchAllSetsFromDb(this.props.user.id)
	}

	render() {
		console.log("SETS:", this.props.sets ? this.props.sets.data : "Not yet loaded")
		// const userId = this.props.user ? this.props.user.id : null
		// const setList = sets.data ? sets.data.map((set) => 
		// 	<li>{set}</li>) : null
		const setList = this.props.sets.data ? this.props.sets.data.map((set) => <li>{set}</li>) : null

		return(
			<div>
				<h4>BOOP FETCHING SETS</h4>
				<ul>
					{setList}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		user: state.auth,
		sets: state.sets
	})
}

const mapDispatchToProps = (dispatch) => ({
	fetchAllSetsFromDb: (userId) => { dispatch(fetchAllSetsFromDb(userId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchSets)


// component did mount?? or onEnterHook?
// get sets -> list sets
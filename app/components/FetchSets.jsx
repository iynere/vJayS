import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchAllSetsFromDb} from '../reducers/set'

export default class FetchSets extends Component {
	constructor() {
		super()
	}

	render() {
		return(
			<h4>BOOP FETCHING SETS</h4>
		)
	}
}
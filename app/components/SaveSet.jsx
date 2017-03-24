import React, { Component } from 'react'
import {connect} from 'react-redux'
import {saveSetToDB} from '../reducers/' /*SAVING SET REDUCER HERE*/
import { Button } from 'semantic-ui-react'

// localStorage.set = [{title: "Sky Ferreira - Everything Is Embarrassing (Official Video)", videoId: "rEamE0MYPkg", thumbnailUrl: "https://i.ytimg.com/vi/rEamE0MYPkg/default.jpg", direction: "Left"}]

class SaveSet extends Component {
	constructor() {
		super()

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.props.saveSetToDB(localStorage.set)
	}

	render() {
		return (
			<div>
				<Button onclick={this.handleClick}>Save Set</Button>
			</div>
		)
	}
}

mapStateToProps = () => {

}

mapDispatchToProps = (dispatch) => ({
	saveSetToDB: (setFromLocalStorage) => {dispatch(saveSetToDB(setFromLocalStorage))}
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveSet)

/* THUNK
// export const saveSetToDB = (setFromLocalStorage) => {
// 	axios.post('/api/sets')
		.then(()=> )
// }

*/











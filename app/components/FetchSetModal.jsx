import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button, List, Dropdown, Modal } from 'semantic-ui-react'
import {fetchAllSetsFromDb} from '../reducers/sets'

class FetchSetModal extends Component {
	constructor(props) {
		super(props)
    this.state={
      modalOpen:false
    }
	}

  handleOpen = (e) => {
    e.preventDefault()
    this.setState({
      modalOpen: true,
    })
    this.props.fetchAllSetsFromDb(this.props.user.id)
  }

  handleClose = (e) => {
    e.preventDefault
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    console.log("setsssss", this.props.sets)
    let setList
    if(this.props.sets.data && this.props.sets.data.length >0){
      setList= this.props.sets.data.map((set)=>{
        return (
          <li key={set.id}>{set.name}</li>
        )
      })
    }
		return(
      <Modal trigger={<Dropdown.Item onClick={this.handleOpen}>View Your Sets</Dropdown.Item>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic size='small'>
        <Modal.Content>
  			<div>
  				<h4>BOOP FETCHING SETS</h4>
  				<ul>
            {setList ? setList : null}
  				</ul>
  			</div>
      </Modal.Content>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(FetchSetModal)

import React, { Component } from 'react'
import localStore from 'store'
import {connect} from 'react-redux'
import { Button, List, Dropdown, Modal } from 'semantic-ui-react'
import {fetchAllSetsFromDb} from '../reducers/sets'
import {fetchSetFromDb} from '../reducers/set'
import {receiveQueue} from '../reducers/queue'

class FetchSetModal extends Component {
	constructor(props) {
		super(props)
    this.state={
      modalOpen:false
    }

    // this.handleClick = this.handleClick.bind(this)
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
    let leftQueue = localStore.get('queueLeft')
    let rightQueue = localStore.get('queueRight')
    this.props.receiveQueue(leftQueue, 'queueLeft')
    this.props.receiveQueue(rightQueue, 'queueRight') 
    this.setState({
      modalOpen: false,
    })
  }

  onItemClick = (set, e) => {
    this.props.fetchSetFromDb(this.props.user.id, set.id)
    this.handleClose()
  }

  render() {
    let setList
    if(this.props.sets.data && this.props.sets.data.length >0){
      setList= this.props.sets.data.map(function(set) {
        let bindItemClick = this.onItemClick.bind(this, set)

        return (
          <List.Item key={set.id} onClick={bindItemClick}>{set.name}</List.Item>
        )
      }, this)
    }

		return(
      <Modal trigger={<Dropdown.Item onClick={this.handleOpen}>View Your Sets</Dropdown.Item>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic size='small'>
        <Modal.Content>
  			<div>
  				<h4>Your Sets</h4>
  				<List selection inverted onClick={this.handleClick}>
            {setList ? setList : null}
  				</List>
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
	fetchAllSetsFromDb: (userId) => { dispatch(fetchAllSetsFromDb(userId)) },
  fetchSetFromDb: (userId, setId) => { dispatch(fetchSetFromDb(userId, setId))
  },
  receiveQueue: (queue, queueLeftOrRight) => {
    dispatch(receiveQueue(queue, queueLeftOrRight))
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(FetchSetModal)

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
    this.state = {
      modalOpen:false
    }

    this.handleModalOpen = this.handleModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  handleModalOpen(e) {
    e.preventDefault()
    this.props.fetchAllSetsFromDb(this.props.user.id)
    this.setState({
      modalOpen: true,
    })
  }

  handleModalClose(e) {
    e.preventDefault()
    this.setState({
      modalOpen: false,
    })
  }

  handleClick(boundSetIdEvent) {
    this.props.fetchSetFromDb(this.props.user.id, boundSetIdEvent)
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    let sets
    if (this.props.sets.data && this.props.sets.data.length) {
      
      // save sets variable as mapped List Items from the sets array
      sets = this.props.sets.data.map(set => {
        
        let boundItemClick = this.handleClick.bind(this, set.id)

        return (
          <List.Item key={set.id}
            onClick={boundItemClick}>{set.name}
          </List.Item>
        )
      })
    }

    return (
      <Modal
        trigger={
          <Dropdown.Item
            onClick={this.handleModalOpen}>
            Load a Saved Set
          </Dropdown.Item>
        }
        open={this.state.modalOpen}
        onClose={this.handleModalClose}
        basic size='small'>
        <Modal.Content>
        <div>
          <h4>Select a Set</h4>
          <List selection inverted onClick={null /*this.handleClick*/}>
            {sets ? sets : null}
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

import React, { Component } from 'react'
import localStore from 'store'
import {connect} from 'react-redux'
import { Button, List, Dropdown, Modal } from 'semantic-ui-react'
import {fetchAllSets} from '../reducers/sets'
import {fetchSetFromDb} from '../reducers/set'
import {receiveQueue} from '../reducers/queue'

class ViewAllSetsModal extends Component {
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
    this.props.fetchAllSets()
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
    this.props.fetchSetFromDb(boundSetIdEvent)
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
            onClick={boundItemClick}><h2>{set.name}</h2>
          </List.Item>
        )
      })
    }

    return (
      <Modal
        trigger={
          <Button
            onClick={this.handleModalOpen}>
            View All Sets
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleModalClose}
        basic size='small'>
        <Modal.Content>
        <div>
          <h1>Select a Lovely Set</h1>
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

const mapStateToProps = ({auth, sets}) => {
  return ({
    user: auth,
    sets
  })
}

const mapDispatchToProps = dispatch => ({
  fetchAllSets: () => {
    dispatch(fetchAllSets())
  },
  fetchSetFromDb: setId => { dispatch(fetchSetFromDb(setId))
  },
  receiveQueue: (queue, queueLeftOrRight) => {
    dispatch(receiveQueue(queue, queueLeftOrRight))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllSetsModal)

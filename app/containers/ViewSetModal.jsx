import React, {Component} from 'react'
import localStore from 'store'
import {connect} from 'react-redux'
import {Button, List, Dropdown, Modal} from 'semantic-ui-react'
import SetItem from 'APP/app/components/SetItem'
import {fetchSetItems} from 'APP/app/reducers/set'
import {addToQueue} from 'APP/app/reducers/queue'

class ViewSetModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      set: []
    }

    this.handleModalOpen = this.handleModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  handleModalOpen(event) {
    event.preventDefault()
    // this.props.fetchUserPlaylists(this.props.user.id)
    this.setState({
      modalOpen: true,
      set: this.props.set
    })
  }

  handleModalClose(event) {
    event.preventDefault()
    this.setState({
      modalOpen: false,
    })
  }

  handleClick() {
    // console.log('CLICK EVENT: ',event)
    // this.props.fetchSelectedPlaylist(this.props.user.id, boundPlaylistIdEvent)
    this.setState({
      modalOpen: false,
    })
  }

  render() {
    
    var buttonSpacingStyle = {
      marginRight: "10px"
    }
    
    let setItems
    if (this.props.set && this.props.set.length) {
      
      // save set variable as mapped List Items from the set array
      setItems = this.props.set.map((setItem, idx) => {
        
        let setItemVideo = {
          id: {videoId: setItem.videoId},
          snippet: {
            title: setItem.title,
            thumbnails: {
              default: {
                url: setItem.thumbnailUrl
              }
            }
          },
          direction: setItem.direction,
          index: idx
        }
        // let boundItemClick = this.handleClick.bind(this, setItem.videoId)

        return (
          <SetItem 
            key={idx}
            video={setItemVideo}
            handleClose={this.handleClose}
          />
        )
      })
    }

    return (
      <Modal
        trigger={
          <Button basic color={"youtube"} inverted style={buttonSpacingStyle}
            onClick={this.handleModalOpen}>
            View Current Set
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleModalClose}
        basic size='small'>
        <Modal.Content>
        <div>
          <h2>Your set (played so far)<br /><i>'x' to remove from your set, '+' to add back into your queue</i></h2>
          {setItems ? setItems : null}
        </div>
      </Modal.Content>
      <Modal.Actions style={{textAlign:"left"}}>
        {/*<Button onClick={this.handleClose}>Load Set</Button>*/}
      </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = ({auth, set}) => {
  return ({
    user: auth,
    set
  })
}

const mapDispatchToProps = dispatch => ({
  fetchSetItems: () => dispatch(fetchSetItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewSetModal)

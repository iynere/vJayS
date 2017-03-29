import React, {Component} from 'react'
import {Modal, List, Input} from 'semantic-ui-react'
import YouTubeAutocomplete from 'react-youtube-autocomplete'

export default class SearchResultsModal extends Component {
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

    this.setState({
      modalOpen: false,
    })
  }

  render() {
    console.log("rendering...")
    let searchResults
    // if (this.props.searchResults.data && this.props.sets.data.length) {
    //
    //   // save sets variable as mapped List Items from the sets array
    //   searchResults = this.props.searchResults.data.map(searchResult => {
    //
    //     let boundItemClick = this.handleClick.bind(this, searchResult.id)
    //
    //     return (
    //       <List.Item key={searchResult.id}
    //         onClick={boundItemClick}>{searchResult.name}
    //       </List.Item>
    //     )
    //   })
    // }

    return (
      <Modal
        trigger={<Input fluid placeholder="Search Youtube" icon="search" style={{margin: "5px 20px"}}/>}
        open={this.state.modalOpen}
        onClose={this.handleModalClose}
        basic size='small'>
        <Modal.Content>
        <div>
          <h4>Select a Set</h4>
          <List selection inverted onClick={null /*this.handleClick*/}>
            {searchResults ? searchResults : null}
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








// export default class SearchResults extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      visible: false
//    }
//    this.showSearchResults = this.showSearchResults.bind(this)
//    this.hideSearchResults = this.hideSearchResults.bind(this)
//  }
//
//  showSearchResults() {
//    this.setState({
//      visible: true
//    })
//  }
//
//  hideSearchResults() {
//    this.setState({
//      visible: false
//    })
//  }
//
//  render() {
//    const {visible} = this.state
//    return (
//      <div>
//        <YouTubeAutocomplete
//          apiKey='AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4'
//          placeHolder="Search YouTube"
//          callback={this.showSearchResults}
//        />
//        <Sidebar.Pushable>
//          <Sidebar animation='overlay' direction='top' visible={visible} inverted >
//          </Sidebar>
//          <Sidebar.Pusher>
//            <div>blahblahblah</div>
//          </Sidebar.Pusher>
//        </Sidebar.Pushable>
//      </div>
//    )
//  }
// }

// node modules
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal, List, Input} from 'semantic-ui-react'

// local files
import SearchResultItem from 'APP/app/containers/SearchResultItem'
import YouTubeSearch from 'APP/app/containers/YouTubeSearch'
import {addToQueue} from 'APP/app/reducers/queue'

class Search extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      open: false,
      searchResults: []
    }
    
    this.showSearchResults = this.showSearchResults.bind(this)
    // this.onClickLeft=this.onClickLeft.bind(this)
    // this.onClickRight=this.onClickRight.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  showSearchResults(searchResults) {
    // console.log("search searchResults::", searchResults)
    if (document.getElementsByClassName('react-typeahead-usertext')[0].value.split(' ').join('').length) {
      this.setState({
        open          : true,
        searchResults : searchResults
      })
    }
  }

  handleClose() {
    this.setState({open: false})
  }
  
  handleOpen() {
    this.setState({open: true})
  }

  onRequestClose() {
    this.setState({open: false})
  }

 // onClickLeft() {
 //   // console.log(this.props)
 //  this.setState({open: false})
 //   this.props.addToQueue(this.props.video, 'queueLeft')
 // }
 //
 // onClickRight() {
 //   // console.log(this.props)
 //   this.setState({open: false})
 //   this.props.addToQueue(this.props.video, 'queueRight')
 // }

  render() {
    let results
    if (this.state.searchResults && this.state.searchResults.length) {

      // save results variable as mapped List Items from the results array
      results = this.state.searchResults.map((video, index) => {

        return (
          <SearchResultItem
            key={index}
            video={video}
            handleClose={this.handleClose}
            handleOpen={this.handleOpen}
          />
        )
      })
    }


    return (
      <div style={{width: "500px"}}>
        <YouTubeSearch
          apiKey='AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4'
          placeHolder="Search YouTube"
          callback={this.showSearchResults}
        />
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          basic size='small'>
          <Modal.Content>
          <div>
            <h2>Search Results<br /><i>Add to Left or Right (hold Shift to keep adding items)</i></h2>
            {results ? results : null}
          </div>
        </Modal.Content>
        <Modal.Actions style={{textAlign:"center"}}>
          {/*<Button onClick={this.handleClose}>Load Set</Button>*/}
        </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({search, queue}) => ({
  search,
  queue
})

const mapDispatchToProps = dispatch => ({
  addToQueue: (video, direction) => {
    dispatch(addToQueue(video, direction))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

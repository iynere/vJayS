// import React, {Component} from 'react'
// import {Sidebar} from 'semantic-ui-react'
// import YouTubeAutocomplete from 'react-youtube-autocomplete'

// export default class SearchResults extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//      visible: false
//    }
//    this.showSearchResults = this.showSearchResults.bind(this)
//    this.hideSearchResults = this.hideSearchResults.bind(this)
//  }
  
//  showSearchResults() {
//    this.setState({
//      visible: true
//    })
//  }
  
//  hideSearchResults() {
//    this.setState({
//      visible: false
//    })
//  }

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

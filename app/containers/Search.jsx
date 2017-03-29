import React, {Component} from 'react'
import {connect} from 'react-redux'
import YouTubeAutocomplete from 'react-youtube-autocomplete';

class Search extends Component {
  constructor(props) {
    super(props)
    
    this.onSearchResultsFound = this.onSearchResultsFound.bind(this)
  }
  
  onSearchResultsFound(results) {
    
  }
  
  render() {
    return (
      <YouTubeAutocomplete
        apiKey='AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4'
        placeHolder="Search YouTube"
        callback={console.log}
      />
    );
  }
}

const mapStateToProps = ({search, queue}) => ({
  search,
  queue
})

const mapDispatchToProps = dispatch => ({ })

export default connect(mapStateToProps)(Search)


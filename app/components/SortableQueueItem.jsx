import React, { Component } from 'react'
import { Button, Dimmer, Image, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {removeFromQueue, moveToFront} from 'APP/app/reducers/queue'

class SortableQueueItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  
  handleShow() {
    this.setState({ active: true })
  }
  
  handleHide() {
    this.setState({ active: false })
  }

  onClickPlay() {
    // console.log(this.props)
    this.props.moveToFront(this.props.index, `queue${this.props.direction}`)
  }

  onClickRemove() {
    // console.log(this.props)
    this.props.removeFromQueue(this.props.index, `queue${this.props.direction}`)
  }
  
  render() {
    var headerStyle = {
      color: "#fff",
      paddingBottom: 0,
      marginBottom: "3px",
      marginTop: 0,
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none'   
    }

    var dimDivStyle = {
      paddingTop: 0,
    }
    
    const { active } = this.state
    const content = (
      <div style={dimDivStyle}>
        <p style={headerStyle}>{this.props.video.snippet.title.slice(0,36)}</p>
        
        <Button className="red mini circular icon" onClick={this.onClickRemove.bind(this)}><Icon name="remove"/></Button>
        <Button className="green mini circular icon" onClick={this.onClickPlay.bind(this)}><Icon name="play"/></Button>
      </div>
    )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow.bind(this)}
        onMouseLeave={this.handleHide.bind(this)}
        src={this.props.video.snippet.thumbnails.default.url}
      />
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  queue: state.queue[`${ownProps.direction}`]
});

const mapDispatchToProps = dispatch => ({
  removeFromQueue: (videoIdx, direction) => {
    dispatch(removeFromQueue(videoIdx, direction))
  },
  moveToFront: (videoIdx, direction) => {
    dispatch(moveToFront(videoIdx, direction))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortableQueueItem);

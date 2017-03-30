import React, { Component } from 'react'
import { Button, Dimmer, Image, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {addToQueue} from 'APP/app/reducers/queue'
import {removeFromSet} from 'APP/app/reducers/set'

class SetItem extends Component {
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

  onClickAddBackToQueue() {
    // console.log(this.props)
    this.props.addToQueue(this.props.video, `queue${this.props.video.direction}`)
    this.props.removeFromSet(this.props.video.index)
  }

  onClickRemove() {
    console.log('SETITEMPROPS',this.props)
    this.props.removeFromSet(this.props.video.index)
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
        <Button className="blue mini circular icon" onClick={this.onClickAddBackToQueue.bind(this)}><Icon name="add"/></Button>
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


const mapStateToProps = ({set}) => ({
  set
});

const mapDispatchToProps = dispatch => ({
  addToQueue: (video, direction) => {
    dispatch(addToQueue(video, direction))
  },
  removeFromSet: setItemId => {
    dispatch(removeFromSet(setItemId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SetItem);

import React, { Component } from 'react'
import { Button, Dimmer, Image, Icon } from 'semantic-ui-react'

export default class SortableQueueItem extends Component {
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
  
  
  render() {
    console.log(this.props.video);
    var headerStyle = {
      color: "#fff",
      paddingBottom: 0,
      marginBottom: "3px",
      marginTop: 0,
    }

    var dimDivStyle = {
      paddingTop: 0,
    }
    
    const { active } = this.state
    const content = (
      <div style={dimDivStyle}>
        <p style={headerStyle}>{this.props.video.title}</p>
        
        <Button className="red mini circular icon"><Icon name="remove"/></Button>
        <Button className="green mini circular icon"><Icon name="play"/></Button>
      </div>
    )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow.bind(this)}
        onMouseLeave={this.handleHide.bind(this)}
        src={this.props.video.thumbnail}
      />
    )
  }
}
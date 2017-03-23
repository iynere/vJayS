import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react';

var socket = io(window.location.origin)

export class TapComponent extends Component {
  constructor() {
    super()
    
    this.state={
      size: "massive",
      color: "purple"
    }

    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

  handleTouchStart(e) {
    e.preventDefault();
    console.log("Touching the button!")
    // this.setState({big: !this.state.big})
    this.state.color === "green" ? 
    this.setState({color: "purple"}) :
    this.setState({color: "green"})
    socket.emit('tappingScreen')
  }

  render() {
    return (
      <div className="mobileComponent">
        <Button basic circular className="tapButton" size="massive" onTouchStart={this.handleTouchStart}
          color={this.state.color}>
          T A P
        </Button>
      </div>
    )
  }
}


// export const TapComponent = () => (
//   <div>
//     <h4>Tap Component!</h4>
//   </div>
// )


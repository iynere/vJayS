import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react';

var socket = io(window.location.origin)

export class TapComponent extends Component {
  constructor() {
    super()
    
    this.state={
      size: "massive"
    }

    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

  handleTouchStart() {
    console.log("Touching the button!")
    // this.setState({big: !this.state.big})
    socket.emit('tappingScreen')
  }

  render() {
    return (
      <div>
        <Button basic circular size={this.state.size} onClick={this.handleTouchStart}>
          Tap Me!
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


import React, { Component } from 'react'
<<<<<<< HEAD
import {connect} from 'react-redux'
import { Button } from 'semantic-ui-react';

var socket = io(window.location.origin)

export class TapComponent extends Component {
=======
import { Button } from 'semantic-ui-react'

var socket = io(window.location.origin)

export default class TapComponent extends Component {
>>>>>>> 2db66a71f65b977c106674055ce8d4eae3e4dcbd
  constructor() {
    super()
    
    this.state={
<<<<<<< HEAD
      size: "massive"
=======
      size: "massive",
      color: "purple"
>>>>>>> 2db66a71f65b977c106674055ce8d4eae3e4dcbd
    }

    this.handleTouchStart = this.handleTouchStart.bind(this)
  }

<<<<<<< HEAD
  handleTouchStart() {
    console.log("Touching the button!")
    // this.setState({big: !this.state.big})
=======
  handleTouchStart(e) {
    e.preventDefault();
    this.state.color === "green" ? 
    this.setState({color: "purple"}) :
    this.setState({color: "green"})
>>>>>>> 2db66a71f65b977c106674055ce8d4eae3e4dcbd
    socket.emit('tappingScreen')
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <Button basic circular size={this.state.size} onClick={this.handleTouchStart}>
          Tap Me!
=======
      <div className="mobileComponent">
        <Button basic circular className="tapButton" size="massive" onClick={this.handleTouchStart}
          color={this.state.color}>
          T A P
>>>>>>> 2db66a71f65b977c106674055ce8d4eae3e4dcbd
        </Button>
      </div>
    )
  }
}

<<<<<<< HEAD
// export const TapComponent = () => (
//   <div>
//     <h4>Tap Component!</h4>
//   </div>
// )
=======
>>>>>>> 2db66a71f65b977c106674055ce8d4eae3e4dcbd


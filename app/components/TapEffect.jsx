import React, { Component } from 'react'

var socket = io(window.location.origin)

export default class TapEffect extends Component {
  constructor() {
    super()

    this.state = {
      taps: 0
    }
  }

  componentDidMount() {
    socket.on('updateTapValue', () => {
      this.setState({taps: this.state.taps += 1})
      if (this.state.taps === 25) {
        socket.emit('changePlaybackRate', 1.25)
      }
      
      if (this.state.taps === 50) {
        socket.emit('changePlaybackRate', 1.5)
      }

      if (this.state.taps === 100) {
        socket.emit('changePlaybackRate', 2)
      }

      console.log("updating tap value!", this.state.taps)
    })
  }

  componentWillUnmount() {
    socket.emit('changePlaybackRate', 1)
  } 

  render() {
    return (
      <div>
      </div>
    )
  }


}
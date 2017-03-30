import React, { Component } from 'react'

var socket = io(window.location.origin)

export default class SliderEffect extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    socket.on('updateSliderValue', (newValue) => {
      console.log("GETTING THE SLIDES!!", newValue)
    })
  }

  render() {
    return (
      <div>
        <h4>Slider effect component!!!</h4>
      </div>
    )
  }


}
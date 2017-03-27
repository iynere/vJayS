import React, { Component } from 'react'
import SliderComponent from 'APP/app/components/SliderComponent'

/*~~~DJ CONTROLS TO AFFECT OUTPUT SCREEN~~~*/

var socket = io(window.location.origin)

export default class ControllerVid extends Component {

  constructor(){
    super()
    this.handleOpacitySlider= this.handleOpacitySlider.bind(this)
  }

  handleOpacitySlider(event){
    socket.emit('changeOpacity', event.target.value/100)
  }

  render() {
    // console.log("command current", this.props.command);
    return (
      <div>
        <SliderComponent className='lol' handleChange={this.handleOpacitySlider}/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import SliderComponent from 'APP/app/components/SliderComponent'
import { Form, Button, Header, Icon, Modal } from 'semantic-ui-react'


/*~~~DJ CONTROLS TO AFFECT OUTPUT SCREEN~~~*/

var socket = io(window.location.origin)

export default class ControllerVid extends Component {

  constructor(){
    super()
    this.play="\u25B6"
    this.pause="\u23F8"
    this.playing=0;
    this.state={unicode: "\u25B6"}
    this.handleOpacitySlider= this.handleOpacitySlider.bind(this)
  }

  handleVolumeSlider(event){
    socket.emit('changeVolume', event.target.value*2);
  }

  handleOpacitySlider(event){
    socket.emit('changeOpacity', event.target.value/100)
  }

  handleSkipVideo(direction){
    socket.emit('skipVideoPressed', direction)
  }

  handlePlayBoth(){
    this.playing = this.playing === 0 ? 1 : 0
    let unicode = this.playing === 0 ? this.play : this.pause
    this.setState({unicode: unicode})
    socket.emit('playBothPressed', this.playing)
  }

  render() {
    // console.log("command current", this.props.command);

    return (
      <div className="djControls">
        <h2><Icon name="options" /> Video Controls</h2>
        <div className="djControlButtons">
          <Button inverted basic color="red" size="huge" onClick={()=>this.handleSkipVideo("Left")} icon="fast forward" content="Skip Left"></Button>
          <div className="sliders">
            <button onClick={()=>this.handlePlayBoth()}>{this.state.unicode}</button>
            <SliderComponent  handleChange={this.handleOpacitySlider}/>
            <p>Opacity</p>
            <SliderComponent  handleChange={this.handleVolumeSlider}/>
            <p>Volume</p>
          </div>
          <Button inverted basic color="red" size="huge" onClick={()=>this.handleSkipVideo("Right")} icon="fast forward" content="Skip Right"></Button>
        </div>
      </div>
    )
  }
}
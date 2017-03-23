import React, { Component } from 'react'
import {connect} from 'react-redux'
import EmoticonButtons from '../components/EmoticonButtons'
import TapComponent from '../components/TapComponent'
import SliderComponent from '../components/SliderComponent'

var socket = io(window.location.origin)

//ISSUE ::::
// on first load, if interface isn't touchpad:

class LiveApp extends Component {

  constructor(){
    super()
    this.state={
      interface: ""
    }

    this.handleEmojiClick=this.handleEmojiClick.bind(this)
  }

  componentDidMount() {
    socket.on('allowInteraction', (interaction) => {
      console.log("changing to", interaction);
      this.setState({interface: interaction})
    })

    socket.on('TestingSocket', () => {
      console.log("Testing socket")
    })

    if(this.state.interface=== ""){
      socket.emit('getInterface')
    }
    
    this.handleTouchMove=this.handleTouchMove.bind(this)
  }

  handleTouchMove(e){
    e.preventDefault()
    let x, y
    x=e.touches[0].clientX
    y=e.touches[0].clientY
    socket.emit('mouse_position', {x, y})
  }

  handleEmojiClick(emoji){
    console.log("emoji clicked was", emoji)
    // socket.emit('emojiClicked', emoji)
  }

  render() {
    return (
      <div>
          {this.state.interface === "touchpad" ?  <div className="touchPad"  onTouchMove={this.handleTouchMove}></div>: null}
          {this.state.interface === "emoticons" ? <EmoticonButtons handleEmojiClick={this.handleEmojiClick}/>: null}
          {this.state.interface === "tap" ? <TapComponent /> : null}
          {this.state.interface === "slider" ? <SliderComponent /> : null}
      </div>
    )
  }
}

const mapStateToProps=state => {
  return {
    command: state.command
  }
}

export default connect(mapStateToProps)(LiveApp);

import React, { Component } from 'react'
import {connect} from 'react-redux'
import P5Wrapper from 'react-p5-wrapper'
import {sketch, sketch2} from '../sketches/sketch'
import EmojiEffect from '../components/EmojiEffect'
import TapEffect from '../components/TapEffect'
import SliderEffect from '../components/SliderEffect'

// from state: liveEffect
var socket = io(window.location.origin)

class EffectScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sketchFunction: sketch,
    }
  }

  componentDidMount() {
    socket.on('drawColorEllipse', () => {
      this.setState({sketchFunction: sketch2})
    })

    socket.on('drawWhiteEllipse', () => {
      this.setState({sketchFunction: sketch})
    })

    socket.on('drawEmoticons', () => {
      console.log("loading emoji screen")
      this.setState({sketchFunction: "emojiPoll"})
    })

    socket.on('drawTap', () => {
      console.log("loading tap screen")
      this.setState({sketchFunction: "tap"})
    })

    socket.on('drawSlider', () => {
      console.log("loading slider screen")
      this.setState({sketchFunction: "slider"})
    })
  }

  render() {

    return (
      <div>
          {
            this.state.sketchFunction === sketch ?
            <div id="p5parent" className="p5parents">
              <P5Wrapper sketch={sketch}/>
            </div> : null
          }
          {
            this.state.sketchFunction === sketch2 ?
            <div id="p6parent" className="p5parents">
              <P5Wrapper sketch={sketch2}/>
            </div> : null
          }
          {
              this.state.sketchFunction === "emojiPoll" ?
            <EmojiEffect />
               : null
          }
          {
            this.state.sketchFunction === "tap" ?
            <TapEffect /> : null
          }
          {
            this.state.sketchFunction === "slider" ?
            <SliderEffect /> : null
          }
      </div>
    )
  }
}

const mapStateToProps=state => {
  return {
    command: state.command
  }
}

export default connect(mapStateToProps)(EffectScreen);

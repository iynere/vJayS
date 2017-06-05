// node modules
import React, {Component} from 'react'
import P5Wrapper from 'react-p5-wrapper'
import {connect} from 'react-redux'

// local files
import {sketch, sketch2} from 'APP/app/sketches/sketch'
import EmojiEffect from 'APP/app/containers/EmojiEffect'
import TapEffect from 'APP/app/containers/TapEffect'

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
    socket.on('clearCanvas', () => {
      this.setState({sketchFunction: ""})
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
              this.state.sketchFunction === "emojiPoll" ?
            <EmojiEffect />
               : null
          }
          {
            this.state.sketchFunction === "tap" ?
            <TapEffect /> : null
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

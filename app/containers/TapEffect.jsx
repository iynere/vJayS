// node modules
import React, {Component} from 'react'

// local files
import {lastTwoSecondsOfTaps} from 'APP/app/utils'

var socket = io(window.location.origin)

export default class TapEffect extends Component {
  constructor() {
    super()

    this.state = {
      taps: [],
      interval: 0
    }
    
    this.handleTaps = this.handleTaps.bind(this)
  }

  componentDidMount() {
    socket.on('updateTapValue', () => {
      this.setState({
        taps: this.state.taps.concat(Date.now())
      })
      
      console.log("updating tap value!", this.state.taps)
    })
    
    this.handleTaps()
  }
  
  handleTaps() {
    let interval = setInterval(() => {
      let tapsInTwoSeconds = this.state.taps.length
      // console.log('NUM TAPS', tapsInTwoSeconds)
      
      /* taps algorithm:
      don't do anything if there aren't any taps
      ignore .25 speed b/c it kills audio
      baseline is 2 taps / second, with +1 margin of error
      spread rest of taps numbers from .5 to 2.0 speed
      */
      
      if (tapsInTwoSeconds === 0) {
        console.log('no taps')
      } else if (tapsInTwoSeconds <= 2) {
        socket.emit('changePlaybackRate', 0.5)
      } else if (tapsInTwoSeconds <= 3) {
        socket.emit('changePlaybackRate', 0.75)
      } else if (tapsInTwoSeconds <= 5) {
        socket.emit('changePlaybackRate', 1.0)
      } else if (tapsInTwoSeconds <= 10) {
        socket.emit('changePlaybackRate', 1.25)
      } else if (tapsInTwoSeconds <= 15) {
        socket.emit('changePlaybackRate', 1.5)
      } else if (tapsInTwoSeconds > 15) {
        socket.emit('changePlaybackRate', 2.0)
      }
      
      this.setState({
        taps: lastTwoSecondsOfTaps(this.state.taps)
      })
      
      // console.log('clearing old taps', this.state.taps)
    }, 2000)
    
    this.setState({
      interval: interval
    })
  }
  
  componentWillUnmount() {
    // socket.emit('changePlaybackRate', 1)
    clearInterval(this.state.interval)
  } 

  render() {
    
    return (
      <div>
      </div>
    )
  }


}

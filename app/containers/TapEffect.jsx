// node modules
import React, {Component} from 'react'

// local files
import {lastTwoSecondsOfTaps} from 'APP/app/utils'

var socket = io(window.location.origin)

export default class TapEffect extends Component {
  constructor() {
    super()

    this.state = {
      taps: []
    }
  }

  componentDidMount() {
    setInterval(() => {
      let tapsInTwoSeconds = this.state.taps.length
      
      if (1 <= tapsInTwoSeconds <= 2) {
        socket.emit('changePlaybackRate', 0.25)
      } else if (tapsInTwoSeconds <= 3) {
        socket.emit('changePlaybackRate', 0.5)
      } else if (tapsInTwoSeconds <= 4) {
        socket.emit('changePlaybackRate', 0.75)
      } else if (tapsInTwoSeconds <= 5) {
        socket.emit('changePlaybackRate', 1.0)
      } else if (tapsInTwoSeconds <= 6) {
        socket.emit('changePlaybackRate', 1.25)
      } else if (tapsInTwoSeconds < 8) {
        socket.emit('changePlaybackRate', 1.5)
      } else if (tapsInTwoSeconds >= 8) {
        socket.emit('changePlaybackRate', 2.0)
      }
      
      this.setState({
        taps: lastTwoSecondsOfTaps(this.state.taps)
      })
      
      console.log('clearing old taps', this.state.taps)
    }, 2000)
    // store taps as an array of Date.now()'s
    // .25 speed:   < 1 tap / second
    // .5 speed:    1 tap / second
    // .75 speed:   1.5 taps / second
    // 1 speed:     2 taps / second
    // 1.25 speed:  3 taps / second
    // 1.5 speed:   4 taps / second
    // 2 speed:     > 4 taps / second
    
    
    socket.on('updateTapValue', () => {
      this.setState({
        taps: this.state.taps.concat(Date.now())
      })
      
      console.log("updating tap value!", this.state.taps)
    })
  }
  
  componentWillUnmount() {
    // socket.emit('changePlaybackRate', 1)
  } 

  render() {
    return (
      <div>
      </div>
    )
  }


}

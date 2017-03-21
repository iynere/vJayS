import React, { Component } from 'react'
import {connect} from 'react-redux'

// from state: liveEffect

var socket = io(window.location.origin)

export default class LiveApp extends Component {
  componentDidMount() {
    socket.on('connect', () => {
      console.log("~~~Getting the socket to work in this component!~~~~~")
    })
  }

  render() {
    return (
      <div>
        <h4>Getting to the live app!!</h4>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//  liveEffect = state.liveEffect
// })

// export default connect(mapStateToProps)(LiveApp)
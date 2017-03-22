import React, {Component} from 'react'
import {connect} from 'react-redux'
import YouTube from 'react-youtube'
import EffectScreen from '../components/EffectScreen'

var socket = io(window.location.origin)

class Output extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    socket.on('connect', () => {
      console.log('output socket is live!')
    })
  }
  
  render() {
    const playerOptions = {
      width: window.innerWidth,
      height: window.innerHeight,
      playerVars: {
        autoplay: 0,
        cc_load_policy: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        rel: 0,
        showInfo: 0
      }
    }
    
    return (
      <div>
        <div className="effects">
        </div>
        <div className="youtube1">
          <YouTube 
            opts={playerOptions}
            videoId='LOpRj927vRc'
          />
        </div>
        <div className="youtube2">
          <YouTube 
            opts={playerOptions}
            videoId='v5kRrLmGJho'
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({player, queue}) => ({
  player,
  queue
})

export default connect(mapStateToProps)(Output)

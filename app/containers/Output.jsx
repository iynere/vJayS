import React from 'react'
import {connect} from 'react-redux'
import YouTube from 'react-youtube'

const Output = ({player, queue}) => {
  
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

const mapStateToProps = ({player, queue}) => ({
  player,
  queue
})

export default connect(mapStateToProps)(Output)
import React from 'react'
import EffectScreen from '../containers/EffectScreen'
import OutputPlayer from '../containers/OutputPlayer'

export const Output = () => (
  <div>
    <div className="youtube1">
      <OutputPlayer 
        direction='Left'
      />
    </div>
    <div className="youtube2">
      <OutputPlayer 
        direction='Right'
      />
    </div>
    <div className="effects">
      <EffectScreen />
    </div>
  </div>  
)

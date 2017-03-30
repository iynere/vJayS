import React from 'react'
import EffectScreen from '../containers/EffectScreen'
import OutputPlayer from '../containers/OutputPlayer'

export const Output = () => {
  const visualClasses = "hue invert saturate"

  return (
  <div>
    <div className={`youtube2 filters`}>
      <OutputPlayer
        direction='Left'
      />
    </div>
    <div className={`youtube1 filters`}>
      <OutputPlayer
        direction='Right'
      />
    </div>
    <div className="effects">
      <EffectScreen />
    </div>
  </div>
)}

// node modules
import React from 'react'

// local files
import EffectScreen from 'APP/app/containers/EffectScreen'
import OutputPlayer from 'APP/app/containers/OutputPlayer'

export const Output = () => (
  <div>
    <div className={'youtube2 filters'}>
      <OutputPlayer
        direction='Left'
      />
    </div>
    <div className={'youtube1 filters'}>
      <OutputPlayer
        direction='Right'
      />
    </div>
    <div className='effects'>
      <EffectScreen />
    </div>
  </div>
)

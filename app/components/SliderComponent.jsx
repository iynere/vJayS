// node modules
import React from 'react'

const socket = io(window.location.origin)

export const SliderComponent = props => (
  <input type="range" onChange={props.handleChange}/>
)

import React from 'react'
import {Container} from 'semantic-ui-react'
import YouTube from 'react-youtube'

export const Fullscreen = ({player, queue}) => {
  
  return (
    <div>
      <Container fluid>
        <YouTube />
        <YouTube />
      </Container>  
    </div>
  )
}
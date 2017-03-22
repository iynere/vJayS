import React from 'react'
import {Container} from 'semantic-ui-react'
import Player from '../components/Player'
import Queue from '../components/Queue'

export const Deck = props => (
  <Container>
    <Player 
      direction={props.direction}
    />
    {/*<Controls />*/}
    {/*<Queue 
          direction={props.direction}
        />*/}
  </Container>
)

// if we're reusing components, how do we render them with different information ?

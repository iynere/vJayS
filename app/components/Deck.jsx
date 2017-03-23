import React from 'react'
import {Container} from 'semantic-ui-react'
import Player from '../containers/Player'
import Queue from '../containers/Queue'

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

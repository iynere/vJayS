import React from 'react'
import {Container} from 'semantic-ui-react'
import YouTubePlayer from 'react-youtube'
import Queue from '../components/Queue'

export const Deck = props => (
	<Container>
		<div>blah blah blah</div>
		{/*<Player />*/}
		{/*<Controls />*/}
		<Queue 
			direction={props.direction}
		/>
	</Container>
)

// if we're reusing components, how do we render them with different information ?
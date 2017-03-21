import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Deck} from './Deck'

export const Body = () => (
	<Grid columns='two' divided>
		<Grid.Row>
			<Grid.Column>
				<Deck 
					direction='queueLeft'
				/>
			</Grid.Column>
			<Grid.Column>
				<Deck 
					direction='queueRight'
				/>
			</Grid.Column>
		</Grid.Row>
	</Grid>
)
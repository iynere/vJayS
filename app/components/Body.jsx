import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Deck} from './Deck'
import Controller from '../containers/Controller'
import ControllerVid from '../containers/ControllerVid'
import {Queues} from './Queues'

export const Body = () => {

	const visualClasses = "hue invert saturate"

	return (
		<div>
			<Grid columns='two'>
				<Grid.Row>
					<Grid.Column>
						<div className={`LeftDeck ${visualClasses}`}>
							<Deck
								direction='Left'
							/>
						</div>
					</Grid.Column>
					<Grid.Column>
						<div className={`RightDeck ${visualClasses}`}>
							<Deck
								direction='Right'
							/>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Grid columns='one'>
				<Grid.Row style={{paddingBottom: '0px'}}>
					<Grid.Column>
						<Queues />
						<Controller />
						<ControllerVid />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
)}

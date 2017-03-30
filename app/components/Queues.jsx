import React from 'react'
import {Grid} from 'semantic-ui-react'
import SortableQueue from './SortableQueue'

export const Queues = () => (
			 // <div className="queuesContainer">
	 // <div className="queuesContainerOpaque">
	<Grid columns='one'>
		<Grid.Row style={{paddingTop: '5px', paddingBottom: '5px'}}>
			<Grid.Column>
				<SortableQueue />
			</Grid.Column>
		</Grid.Row>
	</Grid>
)

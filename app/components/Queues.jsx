// node modules
import React from 'react'
import {Grid} from 'semantic-ui-react'

// local files
import SortableQueue from 'APP/app/containers/SortableQueue'

export const Queues = () => (
  <Grid columns='one'>
    <Grid.Row style={{paddingTop: '5px', paddingBottom: '5px'}}>
      <Grid.Column>
        <SortableQueue />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

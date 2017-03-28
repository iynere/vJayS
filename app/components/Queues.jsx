import React from 'react'
import {Grid} from 'semantic-ui-react'
import SortableQueue from './SortableQueue'

export const Queues = () => (
  <div className="queuesContainer">
    <div className="queuesContainerOpaque">

      <Grid columns='two'>
        <Grid.Row>
          <Grid.Column>
            <SortableQueue
              direction='Left'
            />
          </Grid.Column>
          <Grid.Column>
            <SortableQueue
              direction='Right'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </div>
</div>
)

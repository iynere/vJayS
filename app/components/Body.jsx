import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Deck} from './Deck'
import Controller from '../containers/Controller'
import {Queues} from './Queues'

export const Body = () => (
  <div>
    <Grid columns='two'>
      <Grid.Row>
        <Grid.Column>
          <Deck 
            direction='Left'
          />
        </Grid.Column>
        <Grid.Column>
          <Deck 
            direction='Right'
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Grid columns='one'>
      <Grid.Row>
        <Grid.Column>
          <Queues />
          <Controller />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

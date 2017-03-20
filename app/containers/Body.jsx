import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Deck} from './Deck'

export const Body = () => (
  <Grid columns='two' divided>
    <Grid.Row>
      <Grid.Column>
        <Deck 
          /*props for left player*/
        />
      </Grid.Column>
      <Grid.Column>
        <Deck 
          /*props for right player*/
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
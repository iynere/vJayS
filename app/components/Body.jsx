import React from 'react'
import {Grid} from 'semantic-ui-react'
import Controller from '../containers/Controller'
import ControllerVid from '../containers/ControllerVid'
import Player from '../containers/Player'
import {Queues} from './Queues'

export const Body = () => {

  return (
    <div>
      <Grid columns='two'>
        <Grid.Row>
          <Grid.Column>
            <div className={`LeftDeck filters`}>
              <Player
                direction='Left'
              />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className={`RightDeck filters`}>
              <Player
                direction='Right'
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns='one'>
        <Grid.Row>
          <Grid.Column>
            <Queues />
            <Controller />
            <ControllerVid />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
)}

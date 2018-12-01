import React from 'react'
import { Grid } from 'semantic-ui-react';
import Player from './Player';

const ActivePlayers = ({activePlayers}) => {
  
  return (
    <Grid.Row>
      <Grid>
        <Grid.Column>
          {activePlayers.map(player => (
            <Player key={player.id} player={player}/>
          ))}
        </Grid.Column>
      </Grid>
    </Grid.Row>
  )
}

export default ActivePlayers

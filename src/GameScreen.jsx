import React from 'react';
import { Grid } from 'semantic-ui-react';
import HomeTeam from './HomeTeam';
import AwayTeam from './AwayTeam';
import { teams } from './mockTeams';

const GameScreen = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <HomeTeam homeTeam={teams.home}/>
        </Grid.Column>
        <Grid.Column width={8}>
          <AwayTeam awayTeam={teams.away}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default GameScreen;

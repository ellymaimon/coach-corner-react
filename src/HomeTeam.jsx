import React from 'react';
import { Segment, Header, Grid } from 'semantic-ui-react';
import ActivePlayers from './ActivePlayers';
import BenchPlayers from './BenchPlayers';

const HomeTeam = ({homeTeam}) => {
  return (
    <Segment>
      <Header>Home Team</Header>
      <Grid>
        <ActivePlayers activePlayers={homeTeam.active}/>
        <BenchPlayers benchPlayers={homeTeam.bench} />
      </Grid>
    </Segment>
  );
};

export default HomeTeam;

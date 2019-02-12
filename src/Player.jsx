import React from 'react';
import { Grid } from 'semantic-ui-react';

const Player = ({ player }) => {
  const { firstName, lastName, offense, defense, stamina } = player;
  return (
    <Grid.Row>
      {firstName} {lastName} O: {offense} D: {defense} S: {stamina}
    </Grid.Row>
  );
};

export default Player;

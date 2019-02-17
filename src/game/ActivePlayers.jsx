import React from 'react';
import Player from './Player';

const ActivePlayers = ({ activePlayers }) => {
  return (
    <div style={{ marginBottom: '1em'}}>
      <h4>Active Players</h4>
      {activePlayers.map(player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default ActivePlayers;

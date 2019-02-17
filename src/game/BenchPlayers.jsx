import React from 'react';
import Player from './Player';

const BenchPlayers = ({ benchPlayers }) => {
  return (
    <div>
      <h4>Bench Players</h4>
      {benchPlayers.map(player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default BenchPlayers;

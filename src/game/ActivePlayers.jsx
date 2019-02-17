import React from 'react';
import Player from './Player';

const ActivePlayers = ({ activePlayers }) => {
  return (
    <div>
      {activePlayers.map(player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default ActivePlayers;

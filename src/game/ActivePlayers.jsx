import React from 'react';
import Player from './Player';
import './ActivePlayers.css';

const ActivePlayers = ({ activePlayers }) => {
  return (
    <div style={{ marginBottom: '1em' }}>
      <h4>Active Players</h4>
      <div className='category-row'>
        <div>Name</div>
        <div>Offense</div>
        <div>Defense</div>
        <div>Stamina</div>
        <div>Points</div>
      </div>
        {activePlayers.map(player => (
          <Player key={player.id} player={player} />
        ))}
    </div>
  );
};

export default ActivePlayers;

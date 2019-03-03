import React from 'react';
import Player from './Player';
import './ActivePlayers.css';

const ActivePlayers = ({ activePlayers }) => {
  return (
    <div>
      <div className='category-row'>
        <div>Name</div>
        <div>Offense</div>
        <div>Defense</div>
        <div>Stamina</div>
        <div>Points</div>
        <div>Stops</div>
        <div>FG%</div>
      </div>
      {activePlayers.map(player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default ActivePlayers;

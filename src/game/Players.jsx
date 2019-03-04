import React from 'react';
import Player from './Player';
import './Players.css';

const Players = ({ players }) => {
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
      {players.map(player => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

export default Players;

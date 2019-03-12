import React from 'react';
import Player from './Player';
import './Players.css';

const Players = ({ players, status, setSub, subOut, subIn }) => {
  return (
    <div>
      <h2 className='players-header'>{status} Players</h2>
      <div className='category-row'>
        <div>Name</div>
        <div>Offense</div>
        <div>Defense</div>
        <div>Endurance</div>
        <div>Stamina</div>
        <div>Points</div>
        <div>Stops</div>
        <div>FG%</div>
      </div>
      {players.map(player => (
        <Player
          key={player.id}
          player={player}
          setSub={setSub}
          subOut={subOut}
          subIn={subIn}
        />
      ))}
    </div>
  );
};

export default Players;

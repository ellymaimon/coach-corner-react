import React from 'react';
import './Player.css';

const Player = ({ player }) => {
  const { firstName, lastName, offense, defense, stamina, points } = player;
  return (
    <div className='player-container'>
      <div>
        {firstName} {lastName}
      </div>
      <div>O: {offense}</div>
      <div>D: {defense}</div>
      <div>S: {stamina}</div>
      <div>Pts: {points}</div>
    </div>
  );
};

export default Player;

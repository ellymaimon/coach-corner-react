import React from 'react';
import './Player.css';

const Player = ({ player }) => {
  const { firstName, lastName, offense, defense, stamina, points, stops, fieldGoalPercentage } = player;
  return (
    <div className='player-container'>
      <div>
        {firstName} {lastName}
      </div>
      <div>{offense}</div>
      <div>{defense}</div>
      <div>{stamina}</div>
      <div>{points}</div>
      <div>{stops}</div>
      <div>{Math.round(fieldGoalPercentage)}%</div>
    </div>
  );
};

export default Player;

import React from 'react';
import './Player.css';

const Player = ({ player }) => {
  const { firstName, lastName, offense, defense, stamina, endurance, points, stops, fieldGoalPercentage } = player;
  return (
    <div className='player-container'>
      <div>
        {firstName} {lastName}
      </div>
      <div>{offense}</div>
      <div>{defense}</div>
      <div>{endurance}</div>
      <div>{stamina}</div>
      <div>{points}</div>
      <div>{stops}</div>
      <div>{Math.round(fieldGoalPercentage)}%</div>
    </div>
  );
};

export default Player;

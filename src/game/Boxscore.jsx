import React from 'react';
import Team from './Team';
import './Boxscore.css';

const Boxscore = ({ game }) => {
  return (
    <div>
      <div className='boxscore'>
        <div className='boxscore-home'>
          <h1 className='boxscore-heading'>Home</h1>
          <Team team={game.homeTeam} />
        </div>
        <div className='boxscore-away'>
          <h1 className='boxscore-heading'>Away</h1>
          <Team team={game.awayTeam} />
        </div>
      </div>
    </div>
  );
};

export default Boxscore;

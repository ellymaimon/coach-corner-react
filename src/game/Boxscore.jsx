import React from 'react';
import Team from './Team';
import './Boxscore.css';

const Boxscore = ({game}) => {  
  return (
    <div>
      <div className='boxscore'>
        <div className='boxscore-home'>
          <h1>Home Team</h1>
          <Team team={game.homeTeam} />
        </div>
        <div className='boxscore-away'>
          <h1>Away Team</h1>
          <Team team={game.awayTeam} />
        </div>
      </div>
    </div>
  );
};

export default Boxscore;

import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({game}) => {
  return (
    <div>
      <div className='scoreboard'>
        <div className='minutes'>{game.state.minutes}</div>
        <div className='colon-text'>:</div>
        <div className='seconds'>
          {game.state.seconds === 0 ? '00' : game.state.seconds}
        </div>
        <div className='home-text'>HOME</div>
        <div className='quarter-text'>Q</div>
        <div className='away-text'>AWAY</div>
        <div className='home-score'>{game.homeTeam.points}</div>
        <div className='quarter'>{game.state.quarter}</div>
        <div className='away-score'>{game.awayTeam.points}</div>
      </div>
    </div>
  );
};

export default Scoreboard;

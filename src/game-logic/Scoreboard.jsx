import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Game from './GameStore';
import Team from '../game/Team';
import './Scoreboard.css';

const Scoreboard = observer(() => {
  const game = useContext(Game);
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

      {!game.state.isRunning ? (
        <button className='btn' onClick={() => game.gameStart()}>
          Start
        </button>
      ) : (
        <button className='btn' onClick={() => game.gameStop()}>
          Stop
        </button>
      )}

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
});

export default Scoreboard;

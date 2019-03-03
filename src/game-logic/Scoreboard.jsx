import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Game from './GameStore';
import Team from '../game/Team';
import './Scoreboard.css';

const Scoreboard = observer(() => {
  const store = useContext(Game);
  return (
    <div>
      <div className='scoreboard'>
        <div className='minutes'>{store.game.minutes}</div>
        <div className='colon-text'>:</div>
        <div className='seconds'>
          {store.game.seconds === 0 ? '00' : store.game.seconds}
        </div>
        <div className='home-text'>HOME</div>
        <div className='quarter-text'>Q</div>
        <div className='away-text'>AWAY</div>
        <div className='home-score'>{store.homeTeam.points}</div>
        <div className='quarter'>{store.game.quarter}</div>
        <div className='away-score'>{store.awayTeam.points}</div>
      </div>

      {!game.state.isRunning ? (
        <button className='btn' onClick={() => game.gameStart()}>Start</button>
      ) : (
        <button className='btn' onClick={() => game.gameStop()}>Stop</button>
      )}

      <h2>Home Team</h2>
      <Team team={store.homeTeam} />

      <h2>Away Team</h2>
      <Team team={store.awayTeam} />
    </div>
  );
});

export default Scoreboard;

import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Game from '../game-logic/GameStore';
import Scoreboard from './Scoreboard';
import Boxscore from './Boxscore';
import './GameContainer.css';

const GameContainer = observer(() => {
  const game = useContext(Game);
  useEffect(() => {}, [game.state.seconds]);
  return (
    <div className='game-container'>
      <Scoreboard game={game} />
      {!game.state.currentlySubbing && (
        <div className='game-container-btns'>
          {!game.state.isRunning ? (
            <button className='btn' onClick={() => game.gameStart()}>
              Start
            </button>
          ) : (
            <button className='btn' onClick={() => game.callTimeout()}>
              Call Timeout
            </button>
          )}
        </div>
      )}
      <Boxscore game={game} />
    </div>
  );
});

export default GameContainer;

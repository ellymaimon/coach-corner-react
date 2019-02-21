import React, { useState } from 'react';
import { useInterval } from './useInterval';
import { teams } from '../teamGenerator';
import { singlePosession } from './gameLogic';
import Team from '../game/Team';

const GameLogicTest = () => {
  let initialGameState = {
    homeTeam: {
      active: teams.home.active,
      bench: teams.home.bench,
      timeouts: 2,
      points: 0,
    },
    awayTeam: {
      active: teams.away.active,
      bench: teams.away.bench,
      timeouts: 2,
      points: 0,
    },
    currentQuarter: 1,
    minutesRemaining: 12,
    secondsRemaining: 0,
    isOver: false,
    isPaused: false,
  };

  const [game, setGame] = useState(initialGameState);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useInterval(
    () => {
      let updatedGame = singlePosession(game);
      if (updatedGame.isOver === true) {
        setGameOver(true);
      }
      if (updatedGame.isPaused === true) {
        setGameRunning(false);
        updatedGame.isPaused = false;
      }
      setGame(updatedGame);
      setSecondsRemaining(game.secondsRemaining);
    },
    gameRunning ? 200 : null
  );

  const startGame = () => {
    setGameRunning(true);
  };

  const stopGame = () => {
    setGameRunning(false);
  };

  const reset = () => {
    stopGame();
    setSecondsRemaining(0);
    setGame(initialGameState);
    console.log(initialGameState);
    
  };
  return (
    <div>
      <h1>Game Logic Test</h1>
      <h2>Scoreboard</h2>
      {gameOver ? (
        <h3>Game Over!</h3>
      ) : (
        <div>
          <h3>
            Time Remaining: {game.minutesRemaining}:
            {secondsRemaining === 0 ? '00' : secondsRemaining}
          </h3>
          <h3>Quarter: {game.currentQuarter} </h3>
        </div>
      )}
      <h3>Home Points: {game.homeTeam.points} </h3>
      <h3>Away Points: {game.awayTeam.points} </h3>

      {gameRunning ? (
        <button onClick={() => stopGame()}>Stop Game</button>
      ) : (
        <button onClick={() => startGame()}>Start Game</button>
      )}
      <button onClick={() => reset()}>Reset</button>
      
      <h2>Home Team</h2>
      <Team team={game.homeTeam}></Team>

      <h2>Away Team</h2>
      <Team team={game.awayTeam}></Team>
    </div>
  );
};

export default GameLogicTest;

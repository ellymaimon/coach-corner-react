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
  return (
    <div>
      game logic test
    </div>
  );
};

export default GameLogicTest;

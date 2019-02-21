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
  return (
    <div>
      game logic test
    </div>
  );
};

export default GameLogicTest;

import React from 'react';
import HomeTeam from './HomeTeam';
import AwayTeam from './AwayTeam';
import { teams } from '../teamGenerator';

const GameScreen = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <HomeTeam homeTeam={teams.home} />
      <AwayTeam awayTeam={teams.away} />
    </div>
  );
};

export default GameScreen;

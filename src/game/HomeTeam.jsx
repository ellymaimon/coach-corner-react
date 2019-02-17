import React from 'react';
import ActivePlayers from './ActivePlayers';
import BenchPlayers from './BenchPlayers';

const HomeTeam = ({ homeTeam }) => {
  return (
    <div>
      <h2>Home Team</h2>
      <div>
        <ActivePlayers activePlayers={homeTeam.active} />
        <BenchPlayers benchPlayers={homeTeam.bench} />
      </div>
    </div>
  );
};

export default HomeTeam;

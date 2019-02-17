import React from 'react';
import ActivePlayers from './ActivePlayers';
import BenchPlayers from './BenchPlayers';

const Team = ({ team }) => {
  return (
    <div>
      <ActivePlayers activePlayers={team.active} />
      <BenchPlayers benchPlayers={team.bench} />
    </div>
  );
};

export default Team;

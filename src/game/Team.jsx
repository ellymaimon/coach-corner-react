import React from 'react';
import Players from './Players';

const Team = ({ team }) => {
  return (
    <div>
      <h2>Active Players</h2>
      <Players players={team.active} />

      <h2>Bench Players</h2>
      <Players players={team.bench} />
    </div>
  );
};

export default Team;

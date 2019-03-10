import React from 'react';
import Players from './Players';

const Team = ({ team }) => {
  return (
    <div>
      <Players players={team.active} status={'Active'}/>
      {/* <Players players={team.bench} /> */}
    </div>
  );
};

export default Team;
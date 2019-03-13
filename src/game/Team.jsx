import React, { useState, useContext } from 'react';
import Game from '../game-logic/GameStore';
import Players from './Players';

const Team = ({ team }) => {
  const game = useContext(Game);
  const [subOut, setSubOut] = useState(null);
  const [subIn, setSubIn] = useState(null);
  const [, setFinishedASub] = useState(false);

  const subPlayers = () => {
    setFinishedASub(false);
    if (subOut !== null && subIn !== null) {
      let subOutIndex = team.active.findIndex(
        player => player.id === subOut.id
      );
      let subInIndex = team.bench.findIndex(player => player.id === subIn.id);

      [team.active[subOutIndex], team.bench[subInIndex]] = [
        team.bench[subInIndex],
        team.active[subOutIndex],
      ];
    }
    setFinishedASub(true);
    setSubIn(null);
    setSubOut(null);
  };

  return (
    <div>
      {subIn !== null && subOut !== null && game.state.allowSubs && (
        <button onClick={() => subPlayers()}>Complete Substitution</button>
      )}
      {subOut && game.state.allowSubs && (
        <p>
          Player selected to come out: {subOut.firstName} {subOut.lastName}
        </p>
      )}
      {subIn && game.state.allowSubs && (
        <p>
          Player selected to come in: {subIn.firstName} {subIn.lastName}
        </p>
      )}
      <Players
        players={team.active}
        status={'Active'}
        setSub={setSubOut}
        subOut={subOut}
      />
      <Players
        players={team.bench}
        status={'Bench'}
        setSub={setSubIn}
        subIn={subIn}
      />
    </div>
  );
};

export default Team;

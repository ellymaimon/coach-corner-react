import React, { useState, useContext, useEffect } from 'react';
import Game from '../game-logic/GameStore';
import Players from './Players';
import SubConfirmation from './SubConfirmation';
import { latestScorerId } from '../game-logic/gameLogic';

const Team = ({ team }) => {
  const game = useContext(Game);
  const [subOut, setSubOut] = useState(null);
  const [subIn, setSubIn] = useState(null);
  const [lastToScoreId, setLastToScoreId] = useState(null);

  useEffect(() => {
    setLastToScoreId(latestScorerId);
  }, [latestScorerId]);

  const subPlayers = () => {
    if (subOut && subIn) {
      let subOutIndex = team.active.findIndex(
        player => player.id === subOut.id
      );
      let subInIndex = team.bench.findIndex(player => player.id === subIn.id);

      [team.active[subOutIndex], team.bench[subInIndex]] = [
        team.bench[subInIndex],
        team.active[subOutIndex],
      ];
    }
    setSubIn(null);
    setSubOut(null);
  };

  return (
    <div>
      <SubConfirmation
        subIn={subIn}
        subOut={subOut}
        allowed={game.state.allowSubs}
        subPlayers={subPlayers}
      />
      <Players
        players={team.active}
        status={'Active'}
        setSub={setSubOut}
        subOut={subOut}
        lastToScoreId={lastToScoreId}
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

import React, { useState, useEffect, useContext } from 'react';
import Game from '../game-logic/GameStore';
import './Player.css';

const Player = ({ player, setSub, subOut, subIn, lastToScoreId }) => {
  const game = useContext(Game);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (
      (subOut && subOut.id === player.id && game.state.allowSubs) ||
      (subIn && subIn.id === player.id && game.state.allowSubs)
    ) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [subOut, subIn, game.state.allowSubs, lastToScoreId]);

  const {
    firstName,
    lastName,
    offense,
    defense,
    stamina,
    endurance,
    points,
    stops,
    fieldGoalPercentage,
  } = player;

  return (
    <div>
      
      {selected ? (
        <div className='player-container selected'>
          <div>
            {firstName} {lastName}
          </div>
          <div>{offense}</div>
          <div>{defense}</div>
          <div>{endurance}</div>
          <div>{stamina}</div>
          <div>{points}</div>
          <div>{stops}</div>
          <div>{Math.round(fieldGoalPercentage)}%</div>
        </div>
      ) : (
        <div
          className={lastToScoreId === player.id ? 'player-container player-scored' : 'player-container'} 
          onClick={() => {
            game.state.allowSubs && setSub(player);
          }}
        >
          <div>
            {firstName} {lastName}
          </div>
          <div>{offense}</div>
          <div>{defense}</div>
          <div>{endurance}</div>
          <div>{stamina}</div>
          <div>{points}</div>
          <div>{stops}</div>
          <div>{Math.round(fieldGoalPercentage)}%</div>
        </div>
      )}
    </div>
  );
};

export default Player;

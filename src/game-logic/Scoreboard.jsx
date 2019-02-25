import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Game from './GameStore';
import Team from '../game/Team';

const Scoreboard = observer(() => {
  const store = useContext(Game);
  return (
    <div>
      <h1>Home Team: {store.homeTeam.points}</h1>
      <h1>Away Team: {store.awayTeam.points}</h1>
      <h1>Quarter: {store.game.quarter}</h1>
      <h1>
        Time: {store.game.minutes}:
        {store.game.seconds === 0 ? '00' : store.game.seconds}
      </h1>

      {!store.game.isRunning ? (
        <button onClick={() => store.gameStart()}>Start</button>
      ) : (
        <button onClick={() => store.gameStop()}>Stop</button>
      )}

      <h2>Home Team</h2>
      <Team team={store.homeTeam} />

      <h2>Away Team</h2>
      <Team team={store.awayTeam} />
    </div>
  );
});

export default Scoreboard;

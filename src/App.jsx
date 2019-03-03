import React, { useState } from 'react';
import SplashScreen from './splash/SplashScreen';
// import GameScreen from './game/GameScreen';
import Scoreboard from './game-logic/Scoreboard';
import './App.css';

const App = () => {
  const [game, setGame] = useState(true);

  return (
    <div className='app' style={{ marginTop: '2em' }}>
      {/* {game ? <GameScreen /> : <SplashScreen setGame={setGame} />} */}
      {game ? <Scoreboard /> : <SplashScreen setGame={setGame} />}
    </div>
  );
};

export default App;

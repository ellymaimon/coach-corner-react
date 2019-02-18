import React, { useState } from 'react';
import SplashScreen from './splash/SplashScreen';
// import GameScreen from './game/GameScreen';
import GameLogicTest from './game-logic/GameLogicTest';

const App = () => {
  const [game, setGame] = useState(false);

  return (
    <div style={{ marginTop: '2em' }}>
      {/* {game ? <GameScreen /> : <SplashScreen setGame={setGame} />} */}
      {game ? <GameLogicTest /> : <SplashScreen setGame={setGame} />}
    </div>
  );
};

export default App;

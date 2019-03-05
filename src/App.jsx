import React, { useState } from 'react';
import SplashScreen from './splash/SplashScreen';
import GameContainer from './game/GameContainer';
import './App.css';

const App = () => {
  const [game, setGame] = useState(true);

  return (
    <div className='app' style={{ marginTop: '2em' }}>
      {game ? <GameContainer /> : <SplashScreen setGame={setGame} />}
    </div>
  );
};

export default App;

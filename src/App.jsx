import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import { Container } from 'semantic-ui-react';
import GameScreen from './GameScreen';

const App = () => {
  const [game, setGame] = useState(false);
  
  return (
    <Container style={{ marginTop: '2em' }}>
    {game ? <GameScreen /> :  <SplashScreen setGame={setGame} />}
    </Container>
  );
};

export default App;

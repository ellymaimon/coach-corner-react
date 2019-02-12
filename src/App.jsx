import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import { Container } from 'semantic-ui-react';
import GameScreen from './GameScreen';

const App = () => {
  // State to determine if game is currently being played
  const [game, setGame] = useState(true);

  return (
    <Container style={{ marginTop: '2em' }}>
      {game ? <GameScreen /> : <SplashScreen setGame={setGame} />}
    </Container>
  );
};

export default App;

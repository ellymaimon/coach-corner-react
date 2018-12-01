import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import { Container } from 'semantic-ui-react';

const App = () => {
  const [game, setGame] = useState(false);
  
  return (
    <Container style={{ marginTop: '2em' }}>
    {game ? <h1>Started Game.</h1> :  <SplashScreen setGame={setGame} />}
    </Container>
  );
};

export default App;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #008cba;
  color: white;
  padding: 1em 2em;
  font-size: 1em;
`;

const SplashScreen = ({ setGame }) => {
  return (
    <Container>
      <h1>Coach's Corner!</h1>
      <Button onClick={() => setGame(true)}>Play!</Button>
    </Container>
  );
};

export default SplashScreen;

import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';

const SplashScreen = ({ setGame }) => {
  return (
    <Segment style={{ maxWidth: 600, margin: '0 auto' }}>
      <Header textAlign='center' size='large'>
        Coach's Corner!
      </Header>
      <Button
        onClick={() => setGame(true)}
        style={{ maxWidth: 200, margin: '0 auto' }}
        fluid
        center
        color='orange'
      >
        Play
      </Button>
    </Segment>
  );
};

export default SplashScreen;

import React from 'react';

const SplashScreen = ({ setGame }) => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h1 textAlign='center' size='large'>
        Coach's Corner!
      </h1>
      <button
        onClick={() => setGame(true)}
        style={{ maxWidth: 200, margin: '0 auto' }}
      >
        Play
      </button>
    </div>
  );
};

export default SplashScreen;

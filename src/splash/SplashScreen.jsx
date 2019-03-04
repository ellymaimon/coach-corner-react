import React from 'react';

const SplashScreen = ({ setGame }) => {
  return (
    <div className='container'>
      <h1>Coach's Corner!</h1>
      <button className='btn' onClick={() => setGame(true)}>
        Play!
      </button>
    </div>
  );
};

export default SplashScreen;

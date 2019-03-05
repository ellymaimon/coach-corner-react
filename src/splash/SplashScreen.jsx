import React from 'react';
import './SplashScreen.css';

const SplashScreen = ({ setGame }) => {
  return (
    <div className='container'>
      <h1>Coach's Corner!</h1>
      <button className='btn-main' onClick={() => setGame(true)}>
        Play!
      </button>
    </div>
  );
};

export default SplashScreen;

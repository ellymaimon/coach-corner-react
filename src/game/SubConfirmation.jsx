import React from 'react';
import './SubConfirmation.css';

const SubConfirmation = ({ subIn, subOut, allowed, subPlayers }) => {
  return (
    <div className='sub-confirmation'>
      {subOut && allowed && (
        <p>
          Player selected to come out: {subOut.firstName} {subOut.lastName}
        </p>
      )}
      {subIn && allowed && (
        <p>
          Player selected to come in: {subIn.firstName} {subIn.lastName}
        </p>
      )}
      {subIn !== null && subOut !== null && allowed && (
        <button onClick={() => subPlayers()}>Complete Substitution</button>
      )}
    </div>
  );
};

export default SubConfirmation;

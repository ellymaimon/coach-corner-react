import React from 'react';

const Player = ({ player }) => {
  const { firstName, lastName, offense, defense, stamina } = player;
  return (
    <div>
      {firstName} {lastName} Offense: {offense} Defense: {defense} Stamina:{' '}
      {stamina}
    </div>
  );
};

export default Player;

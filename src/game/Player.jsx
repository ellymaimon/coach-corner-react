import React from 'react';

const Player = ({ player }) => {
  const { firstName, lastName, offense, defense, stamina, points } = player;
  return (
    <div>
      {firstName} {lastName} Offense: {offense} Defense: {defense} Stamina:{' '}
      {stamina} Points: {points}
    </div>
  );
};

export default Player;

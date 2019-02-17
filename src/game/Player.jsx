import React from 'react';

const Player = ({ player }) => {
  const { firstName, lastName, offense, defense, stamina } = player;
  return (
    <div>
      {firstName} {lastName} O: {offense} D: {defense} S: {stamina}
    </div>
  );
};

export default Player;

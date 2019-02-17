import React from 'react';
import styled from 'styled-components';
import Team from './Team';
import { teams } from '../teamGenerator';

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

const GameScreen = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 20px' }}>
      <GameGrid>
        <div>
          <h2>Home Team</h2>
          <Team team={teams.home} />
        </div>
        <div>
          <h2>Away Team</h2>
          <Team team={teams.away} />
        </div>
      </GameGrid>
    </div>
  );
};

export default GameScreen;

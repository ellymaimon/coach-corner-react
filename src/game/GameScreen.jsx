import React from 'react';
import styled from 'styled-components';
import Team from './Team';
import { teams } from '../teamGenerator';

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 10px;
`;

const Scoreboard = styled.div`
  grid-row: 1;
`;

const HomeTeam = styled.div`
  grid-row: 2;
  grid-column: 1;
`;

const AwayTeam = styled.div`
  grid-row: 2;
  grid-column: 2;
`;

const GameScreen = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 20px' }}>
      <GameGrid>
        <Scoreboard>Scoreboard</Scoreboard>
        <HomeTeam>
          <h2>Home Team</h2>
          <Team team={teams.home} />
        </HomeTeam>
        <AwayTeam>
          <h2>Away Team</h2>
          <Team team={teams.away} />
        </AwayTeam>
      </GameGrid>
    </div>
  );
};

export default GameScreen;

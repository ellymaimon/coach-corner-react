import { teams } from '../teamGenerator';

console.log(teams);

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gameLogic = teams => {
  let currentGame = {
    homeTeam: {
      active: teams.home.active,
      bench: teams.home.bench,
      timeouts: 2,
    },
    awayTeam: {
      active: teams.away.active,
      bench: teams.away.bench,
      timeouts: 2,
    },
    currentQuarter: 1,
    homeScore: 0,
    awayScore: 0,
    minutesRemaining: 12,
    secondsRemaining: 0,
  };
};

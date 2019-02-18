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

const gameOver = game => {
  const { currentQuarter, minutesRemaining, secondsRemaining } = game;
  return currentQuarter === 4 &&
    minutesRemaining === 0 &&
    secondsRemaining === 0
    ? true
    : false;
};

const attemptScore = (offensivePlayer, defensivePlayer) => {
  let offenseRating = offensivePlayer.offense;
  let missChance = getRandom(0, 100);

  if (offenseRating > defensivePlayer.defense) {
    if (Math.floor(offenseRating / 10) === Math.floor(missChance / 10)) {
      return 3;
    } else if (offenseRating > missChance) {
      return 2;
    } else {
      return 0;
    }
  }
};

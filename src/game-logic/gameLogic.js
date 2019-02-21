const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Boolean check for the end of a game
const gameOver = game => {
  const { currentQuarter, minutesRemaining, secondsRemaining } = game;
  return currentQuarter === 4 &&
    minutesRemaining === 0 &&
    secondsRemaining === 0
    ? true
    : false;
};

// Taking two players, sims a single posession and returns points
const attemptScore = (offensivePlayer, defensivePlayer) => {
  let offenseRating = offensivePlayer.offense;
  let defenseRating = defensivePlayer.defense;
  let missChance = getRandom(0, 100);

  if (defenseRating - offenseRating < 50) {
    if (Math.floor(offenseRating / 10) === Math.floor(missChance / 10)) {
      return 3;
    } else if (offenseRating > missChance) {
      return 2;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};

export const singlePosession = game => {
  // Check if the game is over and stop simulation
  if (gameOver(game)) {
    game.isOver = true;
    return game;
  }

  // What happens during a posession?

  // Each team attemps to score

  // Get a random player from each team to be the off & def player
  let homeOffensePlayer = game.homeTeam.active[getRandom(0, 2)];
  let homeDefensePlayer = game.homeTeam.active[getRandom(0, 2)];
  let awayOffensePlayer = game.awayTeam.active[getRandom(0, 2)];
  let awayDefensePlayer = game.awayTeam.active[getRandom(0, 2)];

  // If home team scores, add points to team and player
  let homePointsScored = attemptScore(homeOffensePlayer, awayDefensePlayer);
  game.homeTeam.points += homePointsScored;
  homeOffensePlayer.points += homePointsScored;

  // If away team scores, add points to team and player
  let awayPointsScored = attemptScore(awayOffensePlayer, homeDefensePlayer);
  game.awayTeam.points += awayPointsScored;
  awayOffensePlayer.points += awayPointsScored;

  // If its the end of the quarter, pause the game and reset clock
  if (game.secondsRemaining === 0 && game.minutesRemaining === 0) {
    game.currentQuarter++;
    game.minutesRemaining = 12;
    game.secondsRemaining = 0;
    game.isPaused = true;
    return game;
  }

  // Otherwise, 30 seconds tick off the clock
  if (game.secondsRemaining > 0) {
    game.secondsRemaining -= 30;
  } else {
    game.minutesRemaining--;
    game.secondsRemaining = 30;
  }

  return game;
};

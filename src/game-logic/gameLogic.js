const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Boolean check for the end of a game
const gameOver = store => {
  const { quarter, minutes, seconds } = store.game;
  return quarter === 4 && minutes === 0 && seconds === 0 ? true : false;
};

// Taking two players, sims a single posession and returns points
const shoot = (offensivePlayer, defensivePlayer) => {
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

export const playGame = store => {
  const { homeTeam, awayTeam, game } = store;
  
  if (gameOver(store)) {
    store.gameStop();
    return;
  }

  // Get a random player from each team to be the off & def player
  let homeOffensePlayer = homeTeam.active[getRandom(0, 2)];
  let homeDefensePlayer = homeTeam.active[getRandom(0, 2)];
  let awayOffensePlayer = awayTeam.active[getRandom(0, 2)];
  let awayDefensePlayer = awayTeam.active[getRandom(0, 2)];

  // If home team scores, add points to team and player
  let homePointsScored = shoot(homeOffensePlayer, awayDefensePlayer);
  homeTeam.points += homePointsScored;
  homeOffensePlayer.points += homePointsScored;

  // If away team scores, add points to team and player
  let awayPointsScored = shoot(awayOffensePlayer, homeDefensePlayer);
  awayTeam.points += awayPointsScored;
  awayOffensePlayer.points += awayPointsScored;

  // If its the end of the quarter, pause the game and reset clock, 
  if (game.seconds === 0 && game.minutes === 0) {
    game.quarter++;
    game.minutes = 12;
    game.seconds = 0;
  } else {
    if (game.seconds > 0) {
      game.seconds -= 30;
    } else {
      game.minutes--;
      game.seconds = 30;
    }
  }
};

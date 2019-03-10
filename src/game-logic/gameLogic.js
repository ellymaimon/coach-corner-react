const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Checks if the game is over
const gameOver = state => {
  const { quarter, minutes, seconds } = state;
  return quarter === 4 && minutes === 0 && seconds === 0 ? true : false;
};

// Takes an offense rating and returns points earned
const shoot = (offense, stamina) => {
  let missChance = getRandom(0, 100);
  let fatigue = (100 - stamina) / 2;
  missChance += fatigue;

  if (Math.floor(offense / 10) === Math.floor(missChance / 10) && stamina > 0) {
    return 3;
  } else if (offense > missChance) {
    return 2;
  } else {
    return 0;
  }
};

// Runs a posession for a given offensive team and two players head to head
const simPosession = (oTeam, o, d) => {
  let points = 0;
  if (d.defense - o.offense > 25) {
    d.stops++
  } else {
    points = shoot(o.offense);
    o.shotsTaken++;
    points === 0 ? o.misses++ : o.makes++;
    o.fieldGoalPercentage = (o.makes/o.shotsTaken) * 100;
    oTeam.points += points;
    o.points += points;
  }
}

// Decreases the clock depending on its current state
const decrementClock = game => {
  const {state} = game;
  if (state.seconds === 0 && state.minutes === 0) {
    state.quarter++;
    state.minutes = 12;
    state.seconds = 0;
    game.gameStop();
    state.isRunning = false;
  } else {
    if (state.seconds > 0) {
      state.seconds -= 30;
    } else {
      state.minutes--;
      state.seconds = 30;
    }
  }
}

export const playGame = game => {
  const { homeTeam, awayTeam, state } = game;

  // If the game is over, stop the game
  if (gameOver(state)) {
    game.gameStop();
    return;
  }

  // Get a random O & D player from Home
  let homeO = homeTeam.active[getRandom(0, 2)];
  let homeD = homeTeam.active[getRandom(0, 2)];

  // Get a random O & D player from Away
  let awayO = awayTeam.active[getRandom(0, 2)];
  let awayD = awayTeam.active[getRandom(0, 2)];

  // HOME ON OFFENSE //
  simPosession(homeTeam, homeO, awayD);

  // AWAY ON OFFENSE //
  simPosession(awayTeam, awayO, homeD);

  // If its the end of the quarter, pause the game and reset clock,
  // otherwise decrement the clock appropriately.
  decrementClock(game);
};

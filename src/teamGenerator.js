import faker from 'faker';
import v4 from 'uuid';

const getFirstName = () => {
  return faker.fake('{{name.firstName}}');
};

const getLastName = () => {
  return faker.fake('{{name.lastName}}');
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createPlayer = () => {
  let player = {
    id: v4(),
    firstName: getFirstName(),
    lastName: getLastName(),
    offense: getRandom(0, 100),
    defense: getRandom(0, 100),
    stamina: 10,
    points: 0,
    stops: 0,
  };
  return player;
};

export let teams = {
  home: {
    active: [],
    bench: [],
  },
  away: {
    active: [],
    bench: [],
  },
};

for (let i = 1; i <= 12; i++) {
  let team = i <= 6 ? 'home' : 'away';
  let status = i < 4 || (i > 6 && i < 10) ? 'active' : 'bench';
  teams[team][status].push(createPlayer());
}


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
  };
  return player;
};

export const teams = {
  home: {
    active: [createPlayer(), createPlayer(), createPlayer()],
    bench: [createPlayer(), createPlayer(), createPlayer()],
  },
  away: {
    active: [createPlayer(), createPlayer(), createPlayer()],
    bench: [createPlayer(), createPlayer(), createPlayer()],
  },
};

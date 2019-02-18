import { teams } from '../teamGenerator';

console.log(teams);

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

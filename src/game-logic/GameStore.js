import { createContext } from "react";
import { decorate, observable } from "mobx";
import { teams } from '../teamGenerator';
import { playGame } from './gameLogic';

export class Game {
  state = {
    quarter: 1,
    minutes: 12,
    seconds: 0,
    isOver: false,
    isRunning: false,
  };

  homeTeam = {
    active: teams.home.active,
    bench: teams.home.bench,
    timeouts: 2,
    points: 0,
  }

  awayTeam = {
    active: teams.away.active,
    bench: teams.away.bench,
    timeouts: 2,
    points: 0,
  }

  runGame = () => {
    playGame(this);
  };

  gameStart = () => {
    this.intervalId = setInterval(() => this.runGame(), 200);
    this.state.isRunning = true;
  };

  gameStop = () => {
    if (this.intervalId) clearInterval(this.intervalId);
    this.state.isRunning = false;
    this.state.isOver = true;
  };

  // reset = () => {
  //   this.game = {
  //     quarter: 1,
  //     minutes: 12,
  //     seconds: 0,
  //     isOver: false,
  //     isRunning: false,
  //   };

  // }
}

decorate(Game, {
  state: observable,
  homeTeam: observable,
  awayTeam: observable,
});


export default createContext(new Game());

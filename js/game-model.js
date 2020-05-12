import {initialState} from './data-structure.js';

class GameModel {
  constructor() {
    this.start();
  }

  get state() {
    return this._state;
  }

  start() {
    let gameState = Object.assign({}, initialState);
    this._state = gameState;
  }

  restart() {
    let gameState = Object.assign({}, initialState, {
      screen: 2
    });
    this._state = gameState;
  }

  nextScreen() {
    ++this._state.screen;
  }

  updateTime() {
    ++this._state.time;
    return this._state.time;
  }

  gameOver() {
    this._state.screen = 7;
  }
}

export default GameModel;

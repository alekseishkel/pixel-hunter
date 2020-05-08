import {initialState, answersMap} from './data-structure.js';

const gameState = Object.assign({}, initialState);

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  getCurrentScreen() {
    return this._state.screen;
  }

  nextScreen() {
    this._state = gameState.screen + 1;
  }

  // start() {
  //   this._state = initialState;
  // }

  restart() {
    // здесь перезапускаем игру с гритин, т.е. инитСтейт.скрин = 2 (для такой логики в начале надо сделать ассайн инитиал стейта)
    this._state = gameState;
  }

  isAlive() {
    return initialState.lives >= 0;
  }

  howMuchTime() {
    return initialState.time;
  }

  getUserAnswers() {
    return answersMap;
  }
}

export default GameModel;

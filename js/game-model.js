import {initialState, answersMap} from './data-structure.js';

const gameState = Object.assign({}, initialState);

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  getCurrentScreen() {
    return this._state.screen;
  }

  // start() {
  //   this._state = initialState;
  // }
  nextScreen() {
    ++this._state.screen;
    console.log(this._state);
  }

  restart() {
    // здесь перезапускаем игру с гритин, т.е. инитСтейт.скрин = 2 (для такой логики в начале надо сделать ассайн инитиал стейта)
    this._state = gameState;
  }

  isAlive() {
    return gameState.lives >= 0;
  }

  howMuchTime() {
    return gameState.time;
  }

  getUserAnswers() {
    return answersMap;
  }
}

export default GameModel;

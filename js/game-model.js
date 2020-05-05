import {initialState, level, answersMap} from './data-structure.js';

let leeevel;
const currentLevel = (lvl) => {
  leeevel = lvl;
};

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

  restart() {
    //здесь перезапускаем игру с гритин, т.е. инитСтейт.скрин = 2 (для такой логики в начале надо сделать ассайн инитиал стейта)
    this._state = initialState;
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

export {currentLevel, GameModel};

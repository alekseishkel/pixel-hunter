import {initialState, answersMap} from './data-structure.js';

let level;
const currentLevel = (lvl) => {
  level = lvl;
};

class GameModel {
  get state() {
    return Object.freeze(this._state);
  }

  getCurrentLevel() {
    this._state = level;
  }

  isAlive() {
    return initialState.lives;
  }

  howMuchTime() {
    return initialState.time;
  }

  getUserAnswers() {
    return answersMap;
  }
}

export {currentLevel, GameModel};

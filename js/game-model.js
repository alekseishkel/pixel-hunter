import {initialState, level, answersMap} from './data-structure.js';

let leeevel;
const currentLevel = (lvl) => {
  leeevel = lvl;
};
// сделать геткаррентлевел как на скрине
const getLevel = (state) => level[state];

class GameModel {
  get state() {
    return Object.freeze(this._state);
  }

  getCurrentLevel() {
    return getLevel(0);
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

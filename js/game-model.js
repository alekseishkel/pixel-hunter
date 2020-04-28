import {initialState, answersMap} from './data-structure.js';
import {showScreen} from './util.js';

export default class GameModel {
  get state() {
    return this._state;
  }
  //???
  currentLevel() {
    return showScreen();
  }
}

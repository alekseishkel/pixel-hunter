import {showScreen, removeScreen} from '../util.js';
import {initialState} from '../data-structure.js';
import GameModel from '../game-model.js';
import Application from '../application.js';
import IntroView from './intro-view.js';
import greetingView from './../greeting/greeting.js';
import footerView from './../footer/footer.js';

class IntroPresenter {
  constructor(model) {
    this.model = model;
    this.main = new IntroView();
  }

  get element() {
    return this.main.element;
  }

  onAsteriskClick() {
    this.main.onClick = () => {
      this.model.nextScreen();

      Application.showGreeting();
    };
  }
}

export default IntroPresenter;

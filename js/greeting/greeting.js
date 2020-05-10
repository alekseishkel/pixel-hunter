import {showScreen, removeScreen} from '../util.js';
import {initialState} from '../data-structure.js';
import Application from '../application.js';
import GreetingView from './greeting-view.js';
import rulesView from './../rules/rules.js';
// import {headerView} from '../header/header.js';

// greetingView.onClick = () => {
//   removeScreen();
//   showScreen(rulesView.element, headerView.element);
//   ++initialState.screen;
// };

class GreetingPresenter {
  constructor(model) {
    this.model = model;
    this.main = new GreetingView();
  }

  get element() {
    return this.main.element;
  }

  onArrowClick() {
    this.main.onClick = () => {
      this.model.nextScreen();

      Application.showRules();
      // removeScreen();
      // showScreen(greetingView.element);
      // const gameModel = new GameModel();
      // console.log(gameModel.getCurrentScreen());
      // ++initialState.screen;
    };
  }
}

export default GreetingPresenter;

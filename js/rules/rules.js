import {showScreen, removeScreen} from '../util.js';
import {initialState, answersMap} from '../data-structure.js';
import Application from '../application.js';
import RulesView from './rules-view.js';
// import {startTimer} from '../header/header.js';
// import {gameOneView} from '../game-1/game-1.js';

class RulesPresenter {
  constructor(model) {
    this.model = model;
    this.main = new RulesView();
  }

  get element() {
    return this.main.element;
  }

  onGoButtonClick() {
    this.main.onClick = (userNameInput) => {
      this.model.nextScreen();

      const userName = userNameInput.value; //
      answersMap.set(`name`, userName);

      // removeScreen();
      // showScreen(gameOneView.element);
      // startTimer();
      // this.main.changeSizes();

      Application.showGameOne();
      // Application.showGreeting();
      // removeScreen();
      // showScreen(greetingView.element);
      // const gameModel = new GameModel();
      // console.log(gameModel.getCurrentScreen());
      // ++initialState.screen;
    };
  }

  onInputKeyup() {
    this.main.onKeyup = (goButton, userNameInput) => {
      if (!userNameInput.validity.valueMissing && userNameInput.validity.patternMismatch) {
        userNameInput.value = userNameInput.value.replace(/\s+/g, ` `);
        goButton.disabled = false;
      } else {
        goButton.disabled = true;
      }
    };
  }
}

export default RulesPresenter;

// rulesView.onClick = (userNameInput) => {
//   const name = userNameInput.value; //
//   alert(name); //
//   removeScreen();
//   showScreen(gameOneView.element);
//   startTimer();
//   gameOneView.changeSizes();
//   ++initialState.screen;
// };

// rulesView.onKeyup = (goButton, userNameInput) => {
//   if (!userNameInput.validity.valueMissing && userNameInput.validity.patternMismatch) {
//     userNameInput.value = userNameInput.value.replace(/\s+/g, ` `);
//     goButton.disabled = false;
//   } else {
//     goButton.disabled = true;
//   }
// };

// export default rulesView;

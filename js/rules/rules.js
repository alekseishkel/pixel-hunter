import {answersMap} from '../data-structure.js';
import Application from '../application.js';
import RulesView from './rules-view.js';

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

      const userName = userNameInput.value;
      answersMap.set(`name`, userName);

      Application.showGameOne();
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

import {showScreen, removeScreen} from '../util.js';
import RulesView from './rules-view.js';
import {level} from '../data-structure.js';
import gameOneView from '../game-1/game-1.js';

const rulesView = new RulesView();

rulesView.onClick = () => {
  removeScreen();
  showScreen(gameOneView.element);
};

rulesView.onKeyup = (goButton, userNameInput) => {
  if (!userNameInput.validity.valueMissing && userNameInput.validity.patternMismatch) {
    userNameInput.value = userNameInput.value.replace(/\s+/g, ` `);
    goButton.disabled = false;
  } else {
    goButton.disabled = true;
  }
};

export default rulesView;

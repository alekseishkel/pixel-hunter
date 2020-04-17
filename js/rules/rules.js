import {showScreen, removeScreen} from '../util.js';
import RulesView from './rules-view.js';
// import {headerElement} from '../header/header';
// import {activateFirstScreen} from '../game-1/game-1-view.js';
import makeAScreenTemplate from '../screen.js';
import {level} from '../data-structure.js';
// import gameOneView from '../game-1/game-1.js';

const rulesView = new RulesView();

const images = Array.from(level[0].questions.images);
const centralScreen = document.querySelector(`.central`);
const numberOfGameScreen = 0;

rulesView.onClick = () => {
  removeScreen();
  // showScreen(gameOneView.element);
  // centralScreen.insertAdjacentElement(`afterbegin`, headerElement);
  // makeAScreenTemplate(images, numberOfGameScreen, activateFirstScreen);
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

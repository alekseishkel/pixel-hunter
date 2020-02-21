import {showScreen, removeScreen} from './util.js';
import greetingElement from './greeting.js';

const asterisk = document.querySelector(`.intro__asterisk`);

asterisk.addEventListener(`click`, () => {
  removeScreen();
  showScreen(greetingElement);
});

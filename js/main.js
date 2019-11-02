import {showScreen} from './util.js';
import greetingElement from './greeting.js';

const asterisk = document.querySelector(`.intro__asterisk`);

asterisk.addEventListener(`click`, () => {
  showScreen(greetingElement);
});

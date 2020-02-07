import {createDomElement, showScreen, removeGameElement} from './util.js';
import {initialState} from './data-structure.js';
import greetingElement from './greeting.js';

const headerTemplate = (state) => `
  <header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${state.time}</h1>
    <div class="game__lives">
      ${new Array(3 - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    </div>
  </header>`;


const headerElement = createDomElement(headerTemplate(initialState));
const backArrow = headerElement.querySelector(`.back > img`);
const lifes = headerElement.querySelectorAll(`.game__lives > img`);
let clicksCounter = 0;

const subtractOneLife = () => {
  lifes[clicksCounter].src = `img/heart__empty.svg`;
  ++clicksCounter;
  --initialState.lives;
};

const onBackArrowClick = () => {
  backArrow.addEventListener(`click`, () => {
    removeGameElement();
    showScreen(greetingElement);
    initialState.lives = 3;
    lifes.forEach((elem) => {
      elem.src = `img/heart__full.svg`;
    });
    clicksCounter = 0;
  });
};


export {headerElement, backArrow, subtractOneLife, onBackArrowClick};

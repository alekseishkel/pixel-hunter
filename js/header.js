import {createDomElement, showScreen, removeScreen} from './util.js';
import greetingElement from './greeting.js';
import {initialState, answersMap} from './data-structure.js';
import {POINTS_COUNT} from './game-result.js';

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

backArrow.addEventListener(`click`, () => {
  const statsInGameScreen = document.querySelectorAll(`ul.stats > .stats__result`);

  initialState.lives = 3;
  clicksCounter = 0;

  POINTS_COUNT.scores.points = 0;
  POINTS_COUNT.trueAnswer.points = 0;
  POINTS_COUNT.trueAnswer.count = 0;
  POINTS_COUNT.fastAnswer.points = 0;
  POINTS_COUNT.fastAnswer.count = 0;
  POINTS_COUNT.slowAnswer.points = 0;
  POINTS_COUNT.slowAnswer.count = 0;
  POINTS_COUNT.oneLive.points = 0;

  answersMap.clear();

  lifes.forEach((elem) => {
    elem.src = `img/heart__full.svg`;
  });

  statsInGameScreen.forEach((elem) => {
    elem.className = `stats__result stats__result--unknown`;
  });

  removeScreen();
  showScreen(greetingElement);
});


export {headerElement, backArrow, subtractOneLife};

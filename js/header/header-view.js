import {createDomElement, showScreen, removeScreen} from '../util.js';
import greetingElement from '../greeting/greeting.js';
import {initialState, answersMap} from '../data-structure.js';
import {pointsCount} from '../game-result.js';

import AbstractView from '../abstract-view.js';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${this.state.time}</h1>
    <div class="game__lives">
      ${new Array(3 - this.state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(this.state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    </div>
  </header>`;
  }

  subtractOneLife() {

  }

  bind() {
    const backArrow = this.element.querySelector(`.back > img`);

    backArrow.addEventListener(`click`, () => {
      this.onClick();
    });
  }

  onClick() {

  }
}
//
// const headerTemplate = (state) => `
//   <header class="header">
//     <div class="header__back">
//       <span class="back">
//         <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
//         <img src="img/logo_small.png" width="101" height="44">
//       </span>
//     </div>
//     <h1 class="game__timer">${state.time}</h1>
//     <div class="game__lives">
//       ${new Array(3 - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
//       ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
//     </div>
//   </header>`;

// const headerElement = createDomElement(headerTemplate(initialState));
// const backArrow = headerElement.querySelector(`.back > img`);
// const lifes = headerElement.querySelectorAll(`.game__lives > img`);
// let clicksCounter = 0;

// const subtractOneLife = () => {
//   lifes[clicksCounter].src = `img/heart__empty.svg`;
//   ++clicksCounter;
//   --initialState.lives;
// };

// backArrow.addEventListener(`click`, () => {
//   const statsInGameScreen = document.querySelectorAll(`ul.stats > .stats__result`);

//   initialState.lives = 3;
//   clicksCounter = 0;

//   pointsCount.scores.points = 0;
//   pointsCount.trueAnswer.points = 0;
//   pointsCount.trueAnswer.count = 0;
//   pointsCount.fastAnswer.points = 0;
//   pointsCount.fastAnswer.count = 0;
//   pointsCount.slowAnswer.points = 0;
//   pointsCount.slowAnswer.count = 0;
//   pointsCount.oneLive.points = 0;

//   answersMap.clear();

//   lifes.forEach((elem) => {
//     elem.src = `img/heart__full.svg`;
//   });

//   statsInGameScreen.forEach((elem) => {
//     elem.className = `stats__result stats__result--unknown`;
//   });

//   removeScreen();
//   showScreen(greetingElement);
// });


// export {headerElement, backArrow, subtractOneLife};

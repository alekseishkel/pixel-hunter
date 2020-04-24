// import {initialState} from './data-structure.js';

// const template = `<header class="header">
// <div class="header__back">
//   <span class="back">
//     <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
//     <img src="img/logo_small.png" width="101" height="44">
//   </span>
// </div>
// <h1 class="game__timer">${initialState.time}</h1>
// <div class="game__lives">
//   ${new Array(3 - initialState.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
//   ${new Array(initialState.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
// </div>
// </header>`;

// export default template;

import {showScreen, removeScreen, removeGameElement} from '../util.js';
import HeaderView from './header-view.js';
import greetingView from './../greeting/greeting.js';
import GreetingView from './../greeting/greeting-view.js';
import {initialState, answersMap} from '../data-structure.js';
import {pointsCount} from '../game-result.js';
// import gameOneView from '../game-1/game-1.js';

const headerView = new HeaderView(initialState);
// const greetingView = new GreetingView();
let clicksCounter = 0;

headerView.subtractOneLife = () => {
  const lifes = document.querySelectorAll(`.game__lives > img`);
  lifes[clicksCounter].src = `img/heart__empty.svg`;
  ++clicksCounter;
  --initialState.lives;
};

headerView.onClick = () => {
  const statsInGameScreen = document.querySelectorAll(`ul.stats > .stats__result`);
  const lifes = document.querySelectorAll(`.game__lives > img`);

  initialState.lives = 3;
  clicksCounter = 0;
  pointsCount.scores.points = 0;
  pointsCount.trueAnswer.points = 0;
  pointsCount.trueAnswer.count = 0;
  pointsCount.fastAnswer.points = 0;
  pointsCount.fastAnswer.count = 0;
  pointsCount.slowAnswer.points = 0;
  pointsCount.slowAnswer.count = 0;
  pointsCount.oneLive.points = 0;

  answersMap.clear();

  lifes.forEach((elem) => {
    elem.src = `img/heart__full.svg`;
  });

  statsInGameScreen.forEach((elem) => {
    elem.className = `stats__result stats__result--unknown`;
  });

  console.log(greetingView);
  removeScreen();
  showScreen(greetingView.element);
};

export default headerView;

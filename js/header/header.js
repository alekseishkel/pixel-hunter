import {showScreen, removeFullScreen, clearRadioButtons} from '../util.js';
import {initialState, answersMap} from '../data-structure.js';
import {pointsCount} from '../game-result.js';
import HeaderView from './header-view.js';
import {gameOneView, pictureClicks} from '../game-1/game-1.js';
import greetingView from './../greeting/greeting.js';
import footerView from './../footer/footer.js';

const headerView = new HeaderView(initialState);
const ONE_SECOND = 1000;
const gameTimer = headerView.element.querySelector(`.game__timer`);
let timer;
let clicksCounter = 0;

const tick = () => {
  ++initialState.time;
  updateTime();
};

const startTimer = () => {
  timer = setTimeout(() => {
    tick();
    startTimer();
  }, ONE_SECOND);
};

const stopTimer = () => {
  clearTimeout(timer);
};

const updateTime = () => {
  gameTimer.textContent = initialState.time;
};

headerView.subtractOneLife = () => {
  const lifes = document.querySelectorAll(`.game__lives > img`);
  lifes[clicksCounter].src = `img/heart__empty.svg`;
  ++clicksCounter;
  --initialState.lives;
};

headerView.onClick = () => {
  const statsInGameScreen = gameOneView.element.querySelectorAll(`ul.stats > .stats__result`);
  const lifes = document.querySelectorAll(`.game__lives > img`);

  initialState.lives = 3;
  initialState.time = 0;
  gameTimer.textContent = initialState.time;
  clicksCounter = 0;
  pictureClicks.clickCounterForLeftPicture = 0;
  pictureClicks.clickCounterForRightPicture = 0;

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

  stopTimer();
  clearRadioButtons();
  removeFullScreen();
  showScreen(greetingView.element, undefined, footerView.element);
};

export {headerView, startTimer, stopTimer};

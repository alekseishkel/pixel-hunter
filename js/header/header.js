import {showScreen, removeScreen, removeGameElement} from '../util.js';
import HeaderView from './header-view.js';
import greetingView from './../greeting/greeting.js';
import GreetingView from './../greeting/greeting-view.js';
import {initialState, answersMap} from '../data-structure.js';
import {pointsCount} from '../game-result.js';
import gameOneView from '../game-1/game-1.js';

const headerView = new HeaderView(initialState);
const grView = new GreetingView();
const lifes = headerView.element.querySelectorAll(`.game__lives > img`);
let clicksCounter = 0;

headerView.subtractOneLife = () => {
  lifes[clicksCounter].src = `img/heart__empty.svg`;
  ++clicksCounter;
  --initialState.lives;
};

headerView.onClick = () => {
  const statsInGameScreen = document.querySelectorAll(`ul.stats > .stats__result`);

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

  removeScreen();
  showScreen(grView.element);
};

export default headerView;

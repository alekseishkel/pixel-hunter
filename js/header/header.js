import {showScreen, removeFullScreen} from '../util.js';
import {initialState, answersMap} from '../data-structure.js';
import {pointsCount} from '../game-result.js';
import HeaderView from './header-view.js';
import gameOneView from '../game-1/game-1.js';
import greetingView from './../greeting/greeting.js';
import footerView from './../footer/footer.js';

const headerView = new HeaderView(initialState);

let clicksCounter = 0;

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

  removeFullScreen();
  showScreen(greetingView.element, undefined, footerView.element);
};

export default headerView;

import {clearRadioButtons} from '../util.js';
import {answersMap} from '../data-structure.js';
import {pointsCount} from '../game-result.js';
import {pictureClicks} from '../game-1/game-1.js';
import Application from '../application.js';
import HeaderView from './header-view.js';

const ONE_SECOND = 1000;
let timer;

class HeaderPresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.gameTimer = this.header.element.querySelector(`.game__timer`);
  }

  get element() {
    return this.header.element;
  }

  startTimer() {
    timer = setTimeout(() => {
      this.updateTime();
      this.startTimer();
    }, ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(timer);
  }

  updateTime() {
    this.gameTimer.textContent = this.model.updateTime();
  }

  subtractOneLife() {
    const life = document.querySelector(`img[src="img/heart__full.svg"]`);
    life.src = `img/heart__empty.svg`;
    --this.model.state.lives;
  }

  onBackArrowClick() {
    this.header.onClick = () => {
      const statsIcons = document.querySelectorAll(`ul.stats > .stats__result`);
      const lifes = document.querySelectorAll(`.game__lives > img`);

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

      statsIcons.forEach((elem) => {
        elem.className = `stats__result stats__result--unknown`;
      });

      this.stopTimer();
      this.model.restart();
      this.gameTimer.textContent = this.model.state.time;
      clearRadioButtons();

      Application.showGreeting();
    };
  }
}

export default HeaderPresenter;

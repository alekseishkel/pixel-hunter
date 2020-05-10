import {showScreen, removeFullScreen, clearRadioButtons} from '../util.js';
import {initialState, answersMap} from '../data-structure.js';
import Application from '../application.js';
import {pointsCount} from '../game-result.js';
import HeaderView from './header-view.js';
import {GameOnePresenter, pictureClicks} from '../game-1/game-1.js';
import greetingView from './../greeting/greeting.js';
import footerView from './../footer/footer.js';

const ONE_SECOND = 1000;
let clicksCounter = 0;
let timer;

class HeaderPresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.gameTimer = this.header.element.querySelector(`.game__timer`);

    // this.content = document.createDocumentFragment();
    // this.content.appendChild(this.main.element);
    // this.root = document.createElement(`div`);
    // this.root.appendChild(this.content.element);
  }

  get element() {
    return this.header.element;
  }

  // onAsteriskClick() {
  //   this.main.onClick = () => {
  //     this.model.nextScreen();

  //     Application.showGreeting();
  //     // removeScreen();
  //     // showScreen(greetingView.element);
  //     // const gameModel = new GameModel();
  //     // console.log(gameModel.getCurrentScreen());
  //     // ++initialState.screen;
  //   };
  // }

  tick() {
    ++initialState.time;
    this.updateTime();
  }

  startTimer() {
    timer = setTimeout(() => {
      this.tick();
      this.startTimer();
    }, ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(timer);
  }

  updateTime() {
    this.gameTimer.textContent = initialState.time;
  }

  subtractLife() {
    this.header.subtractOneLife = () => {
      const lifes = document.querySelectorAll(`.game__lives > img`);
      lifes[clicksCounter].src = `img/heart__empty.svg`;
      ++clicksCounter;
      --initialState.lives;
    };
  }

  onBackArrowClick() {
    this.header.onClick = () => {
      const statsInGameScreen = this.header.element.querySelectorAll(`ul.stats > .stats__result`);
      const lifes = document.querySelectorAll(`.game__lives > img`);

      initialState.lives = 3;
      initialState.time = 0;
      this.gameTimer.textContent = initialState.time;
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

      this.stopTimer();
      clearRadioButtons();
      // removeFullScreen();
      // showScreen(greetingView.element, undefined, footerView.element);
    };
  }
}

// const headerView = new HeaderView(initialState);

export default HeaderPresenter;

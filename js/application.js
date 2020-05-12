import {
  showScreen,
  removeScreen,
  removeScreenWithoutFooter,
  findAnswersIcons,
  changeAnswersIcons
} from './util.js';
import GameModel from './game-model.js';
import IntroPresenter from './intro/intro.js';
import GreetingPresenter from './greeting/greeting.js';
import RulesPresenter from './rules/rules.js';
import HeaderPresenter from './header/header.js';
import FooterPresenter from './footer/footer.js';
import {GameOnePresenter} from './game-1/game-1.js';
import GameTwoPresenter from './game-2/game-2.js';
import GameThreePresenter from './game-3/game-3.js';
import StatsPresenter from './stats/stats.js';

const gameModel = new GameModel();
const headerPresenter = new HeaderPresenter(gameModel);

export default class Application {
  static showIntro() {
    const introPresenter = new IntroPresenter(gameModel);
    const footerPresenter = new FooterPresenter();
    introPresenter.onAsteriskClick();
    showScreen(introPresenter.element, undefined, footerPresenter.element);
  }

  static showGreeting() {
    const greetingPresenter = new GreetingPresenter(gameModel);
    removeScreenWithoutFooter();
    greetingPresenter.onArrowClick();
    showScreen(greetingPresenter.element);
  }

  static showRules() {
    const rulesPresenter = new RulesPresenter(gameModel);
    removeScreen();
    rulesPresenter.onGoButtonClick();
    rulesPresenter.onInputKeyup();
    headerPresenter.onBackArrowClick();
    showScreen(rulesPresenter.element, headerPresenter.element);
  }

  static showGameOne() {
    const gameOnePresenter = new GameOnePresenter(gameModel, headerPresenter);
    removeScreen();
    gameOnePresenter.onPictureClick();
    showScreen(gameOnePresenter.element);
    headerPresenter.startTimer();
    gameOnePresenter.changeImageSizes();
  }

  static showGameTwo() {
    const gameTwoPresenter = new GameTwoPresenter(gameModel, headerPresenter);
    const icons = findAnswersIcons();
    removeScreen();
    gameTwoPresenter.onPictureClick();
    showScreen(gameTwoPresenter.element);
    changeAnswersIcons(icons);
    gameTwoPresenter.changeImageSizes();
  }

  static showGameThree() {
    const gameThreePresenter = new GameThreePresenter(gameModel, headerPresenter);
    const icons = findAnswersIcons();
    removeScreen();
    gameThreePresenter.onPictureClick();
    showScreen(gameThreePresenter.element);
    changeAnswersIcons(icons);
    gameThreePresenter.changeImageSizes();
  }

  static showStats() {
    const statsPresenter = new StatsPresenter(gameModel);
    const icons = findAnswersIcons();
    removeScreen();
    headerPresenter.stopTimer();
    showScreen(statsPresenter.element);
    changeAnswersIcons(icons);
  }
}

Application.showIntro();

import GameModel from './game-model.js';
import IntroPresenter from './intro/intro.js';
import GreetingPresenter from './greeting/greeting.js';
import RulesPresenter from './rules/rules.js';
import HeaderPresenter from './header/header.js';
import FooterPresenter from './footer/footer.js';
import {showScreen, removeScreen} from './util.js';
import {GameOnePresenter} from './game-1/game-1.js';

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
    removeScreen();
    greetingPresenter.onArrowClick();
    showScreen(greetingPresenter.element);
  }

  static showRules() {
    const rulesPresenter = new RulesPresenter(gameModel);
    removeScreen();
    rulesPresenter.onGoButtonClick();
    rulesPresenter.onInputKeyup();
    showScreen(rulesPresenter.element, headerPresenter.element);
  }

  static showGameOne() {
    const gameOnePresenter = new GameOnePresenter(gameModel);
    removeScreen();
    showScreen(gameOnePresenter.element);
    headerPresenter.startTimer();
    gameOnePresenter.changeImageSizes();
  }
}

Application.showIntro();

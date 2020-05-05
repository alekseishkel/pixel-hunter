import {showScreen, removeScreen} from '../util.js';
import {initialState} from '../data-structure.js';
import IntroView from './intro-view.js';
import greetingView from './../greeting/greeting.js';
import footerView from './../footer/footer.js';
import {GameModel} from '../game-model.js';

const introView = new IntroView();

introView.onClick = () => {
  removeScreen();
  showScreen(greetingView.element);
  const gameModel = new GameModel();
  console.log(gameModel.getCurrentScreen());
  ++initialState.screen;
};

showScreen(introView.element, undefined, footerView.element);

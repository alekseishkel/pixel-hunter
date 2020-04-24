import {showScreen, removeScreen} from '../util.js';
import IntroView from './intro-view.js';
import greetingView from './../greeting/greeting.js';
import footerView from './../footer/footer.js';

const introView = new IntroView();

introView.onClick = () => {
  removeScreen();
  showScreen(greetingView.element);
};

showScreen(introView.element, undefined, footerView.element);

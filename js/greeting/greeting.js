import {showScreen, removeScreen} from '../util.js';
import GreetingView from './greeting-view.js';
import rulesView from './../rules/rules.js';
import {headerView} from '../header/header.js';

const greetingView = new GreetingView();

greetingView.onClick = () => {
  removeScreen();
  showScreen(rulesView.element, headerView.element);
};

export default greetingView;

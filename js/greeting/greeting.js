import {showScreen, removeScreen} from '../util.js';
import {initialState} from '../data-structure.js';
import GreetingView from './greeting-view.js';
import rulesView from './../rules/rules.js';
import {headerView} from '../header/header.js';

const greetingView = new GreetingView();

greetingView.onClick = () => {
  removeScreen();
  showScreen(rulesView.element, headerView.element);
  ++initialState.screen;
};

export default greetingView;

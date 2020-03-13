import {showScreen, removeScreen} from './../util.js';
import MainView from './main-view.js';
import greetengView from './../greeting/greeting-view.js';

export default class Main {
  constructor() {
    this._view = new MainView();
  }

  onClick() {
    removeScreen();
    showScreen(greetengView);
  }
}

const mainView = new MainView();

const centralScreen = document.querySelector(`.central`);
centralScreen.appendChild(mainView.element);

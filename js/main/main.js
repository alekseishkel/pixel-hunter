import {showScreen, removeScreen} from './../util.js';
import MainView from './main-view.js';
import greetengView from './../greeting/greeting-view.js';

export default class Main extends MainView {
  onClick() {
    removeScreen();
    showScreen(greetengView);
  }
}

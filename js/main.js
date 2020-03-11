import {showScreen, removeScreen} from './util.js';
import greetingElement from './greeting.js';
import AbstractView from './abstract-view.js';

class MainView extends AbstractView {
  get template() {
    return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>
  </div>`;
  }

  bind() {
    const asterisk = document.querySelector(`.intro__asterisk`);

    asterisk.addEventListener(`click`, () => {
      removeScreen();
      showScreen(greetingElement);
    });
  }
}

const mainView = new MainView();

const centralScreen = document.querySelector(`.central`);
centralScreen.innerHTML = mainView.template;

import AbstractView from './../abstract-view.js';

export default class IntroView extends AbstractView {
  get template() {
    return `<main class="central">
    <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>
  </div>
  </main>`;
  }

  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);

    asterisk.addEventListener(`click`, () => {
      this.onClick();
    });
  }

  onClick() {

  }
}
const mainView = new IntroView();

const centralScreen = document.querySelector(`.central`);
centralScreen.appendChild(mainView.element);

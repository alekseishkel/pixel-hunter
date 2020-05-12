import AbstractView from '../abstract-view.js';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `<header class="header">
    <div class="header__back">
    <span class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.png" width="101" height="44">
    </span>
    </div>
    <h1 class="game__timer">${this.state.time}</h1>
    <div class="game__lives">
      ${new Array(3 - this.state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(this.state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    </div>
  </header>`;
  }

  bind() {
    const backArrow = this.element.querySelector(`.back > img`);

    backArrow.addEventListener(`click`, () => {
      this.onClick();
    });
  }

  onClick() {

  }
}

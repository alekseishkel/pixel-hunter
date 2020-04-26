import AbstractView from '../abstract-view.js';
import {level} from '../data-structure.js';
import changeImageSizes from '../change-images-sizes.js';

export default class GameThreeView extends AbstractView {
  constructor(images, numberOfGameScreen) {
    super();
    this.images = images;
    this.numberOfGameScreen = numberOfGameScreen;
  }

  get template() {
    return `<div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src=${this.images[0]} alt="Option 1" width=${level[this.numberOfGameScreen - 1].questions.imagesSizes.width}>
      </div>
      <div class="game__option  game__option--selected">
        <img src=${this.images[1]} alt="Option 1" width=${level[this.numberOfGameScreen - 1].questions.imagesSizes.width}>
      </div>
      <div class="game__option">
        <img src=${this.images[2]} alt="Option 1" width=${level[this.numberOfGameScreen - 1].questions.imagesSizes.width}>
      </div>
    </form>
    <div class="stats">
    <ul class="stats">
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;
  }

  changeSizes() {
    changeImageSizes(this.numberOfGameScreen);
  }

  bind() {
    const gameAnswer = this.element.querySelectorAll(`.game__option`);
    gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
      this.onClick(elem);
    }));
  }

  onClick() {

  }

}

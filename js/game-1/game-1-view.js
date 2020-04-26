import AbstractView from '../abstract-view.js';
import {level} from '../data-structure.js';
import changeImageSizes from '../change-images-sizes.js';

export default class GameOneView extends AbstractView {
  constructor(images, numberOfGameScreen) {
    super();
    this.images = images;
    this.numberOfGameScreen = numberOfGameScreen;
  }

  get template() {
    return `<div class="game">
    <p class="game__task"></p>
    <form class="game__content">
      <div class="game__option">
        <img src=${this.images[0]} alt="Option 1" width=${level[this.numberOfGameScreen - 1].questions.imagesSizes.width}>
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src=${this.images[1]} alt="Option 2" width=${level[this.numberOfGameScreen - 1].questions.imagesSizes.width}>
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
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
    const gameAnswer = this.element.querySelectorAll(`.game__answer > input`);

    gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
      this.onClick(gameAnswer, elem);
    }));
  }

  onClick() {

  }
}

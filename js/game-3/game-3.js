import {level, answersMap} from '../data-structure.js';
import {gameResult} from '../game-result.js';
import Application from '../application.js';
import GameThreeView from './game-3-view.js';

const numberOfGameScreen = 3;
const images = Array.from(level[numberOfGameScreen - 1].questions.images);

class GameThreePresenter {
  constructor(model, header) {
    this.model = model;
    this.time = model.state.time;
    this.header = header;
    this.main = new GameThreeView(images, numberOfGameScreen);
  }

  get element() {
    return this.main.element;
  }

  changeImageSizes() {
    this.main.changeSizes();
  }

  onPictureClick() {
    this.main.onClick = (elem) => {
      const picture = elem.firstElementChild;

      if (level[numberOfGameScreen - 1].answers.get(picture.src)) {
        answersMap.set(picture.src, {
          answer: true,
          time: this.model.state.time - this.time
        });
      } else {
        answersMap.set(elem.firstElementChild.src, {
          answer: false,
          time: this.model.state.time - this.time
        });

        this.header.subtractOneLife();
      }

      gameResult(answersMap.get(picture.src).answer, picture);

      this.model.nextScreen();

      Application.showStats();
    };
  }
}


export default GameThreePresenter;

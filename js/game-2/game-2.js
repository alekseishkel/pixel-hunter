import {clearRadioButtons} from '../util.js';
import {level, answersMap} from '../data-structure.js';
import {gameResult} from '../game-result.js';
import Application from '../application.js';
import GameTwoView from './game-2-view.js';

const numberOfGameScreen = 2;
const images = Array.from(level[numberOfGameScreen - 1].questions.images);

class GameTwoPresenter {
  constructor(model, header) {
    this.model = model;
    this.header = header;
    this.time = model.state.time;
    this.main = new GameTwoView(images, numberOfGameScreen);
  }

  get element() {
    return this.main.element;
  }

  changeImageSizes() {
    this.main.changeSizes();
  }

  onPictureClick() {
    this.main.onClick = (elem) => {
      let isCorrectAnswer;
      const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
      const picture = elem.parentElement.parentElement.firstElementChild;

      answersMap.set(picture.src, {
        answer: gameAnswerBackgroundImage.backgroundImage,
        time: this.model.state.time - this.time
      });

      if (answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
        this.header.subtractOneLife();
        isCorrectAnswer = false;
      } else {
        isCorrectAnswer = true;
      }

      gameResult(isCorrectAnswer, picture);
      clearRadioButtons();

      if (this.model.state.lives === 0) {
        this.model.gameOver();

        Application.showStats();
      } else {
        this.model.nextScreen();

        Application.showGameThree();
      }
    };
  }
}

export default GameTwoPresenter;

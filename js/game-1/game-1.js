import {clearRadioButtons} from '../util.js';
import {level, answersMap} from '../data-structure.js';
import {gameResult} from '../game-result.js';
import Application from '../application.js';
import GameOneView from './game-1-view.js';

const pictureClicks = {
  clickCounterForLeftPicture: 0,
  clickCounterForRightPicture: 0
};

const numberOfGameScreen = 1;
const images = Array.from(level[numberOfGameScreen - 1].questions.images);

class GameOnePresenter {
  constructor(model, header) {
    this.model = model;
    this.header = header;
    this.main = new GameOneView(images, numberOfGameScreen);
  }

  get element() {
    return this.main.element;
  }

  changeImageSizes() {
    this.main.changeSizes();
  }

  onPictureClick() {
    let time = 0;

    this.main.onClick = (gameAnswer, elem) => {
      let isCorrectAnswer;
      let picture = elem.parentElement.parentElement.firstElementChild;
      const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);

      answersMap.set(picture.src, {
        answer: gameAnswerBackgroundImage.backgroundImage,
        time: this.model.state.time - time
      });

      time = this.model.state.time;

      if (gameAnswer[0].checked || gameAnswer[1].checked) {
        ++pictureClicks.clickCounterForLeftPicture;
        if (pictureClicks.clickCounterForLeftPicture === 1 && answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
          this.header.subtractOneLife();
          isCorrectAnswer = false;
          gameResult(isCorrectAnswer, picture);
        } else if (pictureClicks.clickCounterForLeftPicture === 1 && answersMap.get(picture.src).answer === level[numberOfGameScreen - 1].answers.get(picture.src)) {
          isCorrectAnswer = true;
          gameResult(isCorrectAnswer, picture);
        }
      }

      if (gameAnswer[2].checked || gameAnswer[3].checked) {
        ++pictureClicks.clickCounterForRightPicture;

        if (pictureClicks.clickCounterForRightPicture === 1 && answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
          this.header.subtractOneLife();
          isCorrectAnswer = false;
          gameResult(isCorrectAnswer, picture);
        } else if (pictureClicks.clickCounterForRightPicture === 1 && answersMap.get(picture.src).answer === level[numberOfGameScreen - 1].answers.get(picture.src)) {
          isCorrectAnswer = true;
          gameResult(isCorrectAnswer, picture);
        }
      }

      if ((gameAnswer[0].checked || gameAnswer[1].checked) && (gameAnswer[2].checked || gameAnswer[3].checked)) {

        pictureClicks.clickCounterForLeftPicture = 0;
        pictureClicks.clickCounterForRightPicture = 0;

        clearRadioButtons();
        this.model.nextScreen();

        Application.showGameTwo();
      }
    };
  }
}

export {GameOnePresenter, pictureClicks};

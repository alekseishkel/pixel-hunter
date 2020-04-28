import {
  showScreen,
  removeScreen,
  findAnswersIcons,
  changeAnswersIcons,
  clearRadioButtons
} from '../util.js';
import {level, answersMap} from '../data-structure.js';
import {gameResult} from '../game-result.js';
import GameOneView from './game-1-view.js';
import {headerView} from '../header/header.js';
import gameTwoView from '../game-2/game-2.js';

const numberOfGameScreen = 1;

const pictureClicks = {
  clickCounterForLeftPicture: 0,
  clickCounterForRightPictur: 0
};

const images = Array.from(level[numberOfGameScreen - 1].questions.images);

const gameOneView = new GameOneView(images, numberOfGameScreen);

gameOneView.onClick = (gameAnswer, elem) => {
  let isCorrectAnswer;
  let picture = elem.parentElement.parentElement.firstElementChild;
  const isGameScreen = true;
  const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);

  answersMap.set(picture.src, {
    answer: gameAnswerBackgroundImage.backgroundImage,
    time: 2000
  });

  if (gameAnswer[0].checked || gameAnswer[1].checked) {
    ++pictureClicks.clickCounterForLeftPicture;
    if (pictureClicks.clickCounterForLeftPicture === 1 && answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
      headerView.subtractOneLife();
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
      headerView.subtractOneLife();
      isCorrectAnswer = false;
      gameResult(isCorrectAnswer, picture);
    } else if (pictureClicks.clickCounterForRightPicture === 1 && answersMap.get(picture.src).answer === level[numberOfGameScreen - 1].answers.get(picture.src)) {
      isCorrectAnswer = true;
      gameResult(isCorrectAnswer, picture);
    }
  }

  if ((gameAnswer[0].checked || gameAnswer[1].checked) && (gameAnswer[2].checked || gameAnswer[3].checked)) {
    const icons = findAnswersIcons();

    pictureClicks.clickCounterForLeftPicture = 0;
    pictureClicks.clickCounterForRightPicture = 0;

    clearRadioButtons();
    removeScreen();
    showScreen(gameTwoView.element);
    gameTwoView.changeSizes();
    changeAnswersIcons(icons, isGameScreen);
  }
};

export {gameOneView, pictureClicks};

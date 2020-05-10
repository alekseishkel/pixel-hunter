import {
  showScreen,
  removeScreen,
  findAnswersIcons,
  changeAnswersIcons,
  copyAnswersIcons,
  pasteAnswersIcons,
  clearRadioButtons
} from '../util.js';
import {initialState, level, answersMap} from '../data-structure.js';
import {gameResult, finalResult} from '../game-result.js';
import GameTwoView from './game-2-view.js';
import headerView from '../header/header.js';
// import {headerView, stopTimer} from '../header/header.js';
import makeStatsView from '../stats/stats.js';
import gameThreeView from '../game-3/game-3.js';

const numberOfGameScreen = 2;
const images = Array.from(level[numberOfGameScreen - 1].questions.images);

const gameTwoView = new GameTwoView(images, numberOfGameScreen);

gameTwoView.onClick = (elem) => {
  let isGameScreen;
  let isCorrectAnswer;
  const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
  const picture = elem.parentElement.parentElement.firstElementChild;

  answersMap.set(picture.src, {
    answer: gameAnswerBackgroundImage.backgroundImage,
    time: 15000
  });

  if (answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
    headerView.subtractOneLife();
    isCorrectAnswer = false;
  } else {
    isCorrectAnswer = true;
  }

  gameResult(isCorrectAnswer, picture);
  clearRadioButtons();

  if (initialState.lives === 0) {
    const answersIcons = copyAnswersIcons();
    const result = finalResult();
    const statsView = makeStatsView(result);

    // stopTimer();
    removeScreen();
    showScreen(statsView.element);
    pasteAnswersIcons(answersIcons);
    initialState.screen = 7;
  } else {
    const icons = findAnswersIcons();

    removeScreen();
    showScreen(gameThreeView.element);
    gameThreeView.changeSizes();
    changeAnswersIcons(icons, isGameScreen);
    ++initialState.screen;
  }
};

export default gameTwoView;

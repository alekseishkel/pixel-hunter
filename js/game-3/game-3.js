import {
  showScreen,
  removeScreen,
  copyAnswersIcons,
  pasteAnswersIcons,
} from '../util.js';
import {level, answersMap, initialState} from '../data-structure.js';
import {gameResult, finalResult} from '../game-result.js';
import GameThreeView from './game-3-view.js';
import headerView from '../header/header.js';
// import {headerView, stopTimer} from '../header/header.js';
import makeStatsView from '../stats/stats.js';

const numberOfGameScreen = 3;
const images = Array.from(level[numberOfGameScreen - 1].questions.images);

const gameThreeView = new GameThreeView(images, numberOfGameScreen);

gameThreeView.onClick = (elem) => {
  const picture = elem.firstElementChild;

  if (level[numberOfGameScreen - 1].answers.get(picture.src)) {
    answersMap.set(picture.src, {
      answer: true,
      time: 10000
    });
  } else {
    answersMap.set(elem.firstElementChild.src, {
      answer: false,
      time: 10000
    });
    headerView.subtractOneLife();
  }

  gameResult(answersMap.get(picture.src).answer, picture);

  const result = finalResult();
  const statsView = makeStatsView(result);
  const answersIcons = copyAnswersIcons();

  // stopTimer();
  removeScreen();
  showScreen(statsView.element);
  pasteAnswersIcons(answersIcons);
  ++initialState.screen;
};

export default gameThreeView;

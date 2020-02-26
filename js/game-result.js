import {answersMap} from './data-structure.js';
import showStatsScreen from './stats.js';
import {initialState} from './data-structure.js';
import {removeGameElement} from './util.js';

const POINTS_SCORE = {
  trueAnswerScore: 100,
  fastAnswerScore: 50,
  slowAnswerScore: 50,
  oneLiveScore: 50,
  slowSpeed: 15000,
  fastSpeed: 5000
};

let result;
let POINTS_COUNT = {
  scores: {
    points: 0,
  },
  trueAnswer: {
    points: 0,
    count: 0
  },
  fastAnswer: {
    points: 0,
    count: 0
  },
  slowAnswer: {
    points: 0,
    count: 0
  },
  oneLive: {
    points: 0
  }
};

const gameResult = (showStats, answer, screenPicture) => {
  const statsIconInGameScreen = document.querySelector(`.stats__result--unknown`);

  if (answer === true) {
    POINTS_COUNT.scores.points += POINTS_SCORE.trueAnswerScore;
    POINTS_COUNT.trueAnswer.points += POINTS_SCORE.trueAnswerScore;
    ++POINTS_COUNT.trueAnswer.count;

    if (answersMap.get(screenPicture.src).time <= POINTS_SCORE.fastSpeed) {
      statsIconInGameScreen.className = `stats__result stats__result--fast`;

      POINTS_COUNT.scores.points += POINTS_SCORE.fastAnswerScore;
      POINTS_COUNT.fastAnswer.points += POINTS_SCORE.fastAnswerScore;
      ++POINTS_COUNT.fastAnswer.count;

    } else if (answersMap.get(screenPicture.src).time >= POINTS_SCORE.slowSpeed) {
      statsIconInGameScreen.className = `stats__result stats__result--slow`;

      POINTS_COUNT.scores.points -= POINTS_SCORE.slowAnswerScore;
      POINTS_COUNT.slowAnswer.points -= POINTS_SCORE.slowAnswerScore;
      ++POINTS_COUNT.slowAnswer.count;

    } else {
      statsIconInGameScreen.className = `stats__result stats__result--correct`;
    }
  } else if (answer === false) {
    statsIconInGameScreen.className = `stats__result stats__result--wrong`;
  }

  if (showStats === true) {
    const statsInGameScreen = document.querySelector(`ul.stats`);
    const statsInGameScreenCopy = statsInGameScreen.cloneNode(true);

    statsInGameScreen.childNodes.forEach((element) => {
      element.className = `stats__result stats__result--unknown`;
    });

    removeGameElement();

    POINTS_COUNT.scores.points += (initialState.lives * POINTS_SCORE.oneLiveScore);

    if (initialState.lives > 0) {
      result = `Победа!`;
      POINTS_COUNT.oneLive.points += POINTS_SCORE.oneLiveScore;
    } else {
      result = `Поражение!`;
      POINTS_COUNT.scores.points = 0;
    }

    showStatsScreen(result, POINTS_COUNT);

    const statsInStatsScreen = document.querySelector(`.result__table > tbody > tr > td`);
    statsInStatsScreen.appendChild(statsInGameScreenCopy);
  }
};

export {gameResult, POINTS_SCORE, POINTS_COUNT};

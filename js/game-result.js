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
let pointsCount = {
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
    pointsCount.scores.points += POINTS_SCORE.trueAnswerScore;
    pointsCount.trueAnswer.points += POINTS_SCORE.trueAnswerScore;
    ++pointsCount.trueAnswer.count;

    if (answersMap.get(screenPicture.src).time <= POINTS_SCORE.fastSpeed) {
      statsIconInGameScreen.className = `stats__result stats__result--fast`;

      pointsCount.scores.points += POINTS_SCORE.fastAnswerScore;
      pointsCount.fastAnswer.points += POINTS_SCORE.fastAnswerScore;
      ++pointsCount.fastAnswer.count;

    } else if (answersMap.get(screenPicture.src).time >= POINTS_SCORE.slowSpeed) {
      statsIconInGameScreen.className = `stats__result stats__result--slow`;

      pointsCount.scores.points -= POINTS_SCORE.slowAnswerScore;
      pointsCount.slowAnswer.points -= POINTS_SCORE.slowAnswerScore;
      ++pointsCount.slowAnswer.count;

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

    pointsCount.scores.points += (initialState.lives * POINTS_SCORE.oneLiveScore);

    if (initialState.lives > 0) {
      result = `Победа!`;
      pointsCount.oneLive.points += POINTS_SCORE.oneLiveScore;
    } else {
      result = `Поражение!`;
      pointsCount.scores.points = 0;
    }

    showStatsScreen(result, pointsCount);

    const statsInStatsScreen = document.querySelector(`.result__table > tbody > tr > td`);
    statsInStatsScreen.appendChild(statsInGameScreenCopy);
  }
};

export {gameResult, POINTS_SCORE, pointsCount};

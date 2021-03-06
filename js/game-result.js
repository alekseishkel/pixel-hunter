import {answersMap} from './data-structure.js';

const POINTS_SCORE = {
  trueAnswerScore: 100,
  fastAnswerScore: 50,
  slowAnswerScore: 50,
  oneLiveScore: 50,
  slowSpeed: 7,
  fastSpeed: 3
};

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

const gameResult = (answer, screenPicture) => {
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
};

const finalResult = (model) => {
  let result;
  if (model.state.lives > 0) {

    pointsCount.scores.points += (model.state.lives * POINTS_SCORE.oneLiveScore);
    pointsCount.oneLive.points += (model.state.lives * POINTS_SCORE.oneLiveScore);
    result = `Победа!`;
  } else {
    pointsCount.scores.points = 0;
    result = `Поражение!`;
  }
  return result;
};

export {gameResult, finalResult, POINTS_SCORE, pointsCount};

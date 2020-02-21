import {initialState} from './data-structure.js';
import {POINTS_COUNT} from './game-result';

const changeLevel = (game, level) => {
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }

  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  const newGame = Object.assign({}, game, {
    level
  });

  return newGame;
};

const countScore = (answers, lives) => {
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }

  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }

  let score = 0;

  answers.forEach((el) => {
    if (el.answer) {
      score += POINTS_COUNT.trueAnswerScore;
    }
    if (el.time <= POINTS_COUNT.fastSpeed) {
      score += POINTS_COUNT.fastAnswerScore;
    }
    if (el.time >= POINTS_COUNT.slowSpeed) {
      score -= POINTS_COUNT.slowAnswerScore;
    }
  });

  if (lives > 0) {
    score += (lives * POINTS_COUNT.oneLiveScore);
  }

  if (lives === 0) {
    score = -1;
  }

  return score;
};

const countLives = (answers) => {
  if (answers < 0) {
    throw new Error(`User answers should not be negative value, it should be object`);
  }

  if (answers === null) {
    throw new Error(`User answers should not be null, it should be object`);
  }

  if (typeof answers === `undefined`) {
    throw new Error(`User answers should not be undefined, it should be object`);
  }

  let userLives;
  let falseAnswers = 0;

  answers.forEach((el) => {
    if (!el.answer) {
      ++falseAnswers;
    }

    if (!el.answer) {
      userLives = initialState.lives - 1;
    }
  });

  if (falseAnswers > 3) {
    throw new Error(`Should be -1 or less wrong answers`);
  }

  return userLives;
};

module.exports = {
  changeLevel,
  countScore,
  countLives
};

const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 0
});

const answers = [
  {
    answer: true,
    time: 6000
  },
  {
    answer: true,
    time: 3000
  },
  {
    answer: true,
    time: 16000
  },
  {
    answer: true,
    time: 1000
  },
  {
    answer: true,
    time: 9000
  },
];

const answersNumber = 10;
const answerSpeed = 3000;
const lives = 3;
const score = 1150;

const checkAnswerSpeed = (speed) => {
  if (speed < 5000) {
    throw new Error(`Speed should be more then 5000ms`);
  }
  return score;
};

console.log(checkAnswerSpeed(10000));

const changeLevel = (game, level) => {
  if (level < 0) {
    throw new Error(`Level should not be negative number`);
  }

  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }

  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

module.exports = {
  changeLevel,
  INITIAL_GAME,
  answersNumber,
  answerSpeed,
  lives,
  checkAnswerSpeed
};


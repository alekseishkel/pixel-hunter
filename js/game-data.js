const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 2,
  time: 0
});

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

module.exports.INITIAL_GAME = INITIAL_GAME;
module.exports.changeLevel = changeLevel;

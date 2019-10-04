module.exports = {
  level: 0,
  lives: 2,
  time: 0
};

let currentLevel = exports.INITIAL_GAME.level;
console.log(exports.INITIAL_GAME.level);

exports.changeLevel = (level) => {
  currentLevel = level;
  return currentLevel;
};

module.exports = {
  name: `Мама`,
  age: 12,
  male: false
};
module.exports = {
  name: `Папа`,
  age: 12,
  male: true
};

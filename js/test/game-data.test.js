// const assert = require(`chai`);

// // const INITIAL_GAME = require(`../game-data`);
// const changeLevel = require(`../game-data`);

// let currentLevel = exports.INITIAL_GAME.level;
// console.log(currentLevel);

// describe(`Check level changer`, () => {
//   it(`should update level of the game`, () => {
//     const newLevel = changeLevel(1);
//     assert.equal(newLevel, 1);
//   });
// });
// import a from './game-2.js';
// console.log(gameTwoElement);
// const a = require(`../game-data`);
// const assert = require(`chai`);


// describe(`Check level changer`, () => {
//   it(`should update level of the game`, () => {
//     assert.equal(a, 1);
//   });
// });

const fatherName = require(`../game-data`).name;
const motherName = require(`../game-data`).name;
describe(`Check level changer`, () => {
  it(`should update level of the game`, () => {
    const makeChild = () => `Отец: ${fatherName}, мать: ${motherName}`;
    module.exports = makeChild();
    console.log(makeChild());
  });
});

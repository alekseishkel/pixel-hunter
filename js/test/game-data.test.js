
const assert = require(`chai`).assert;
const {changeLevel, INITIAL_GAME, answersNumber, answerSpeed, lives, checkAnswerSpeed} = require(`../game-data`);

describe(`Check level changer`, () => {
  it(`should update level of the game`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);
    assert.equal(changeLevel(INITIAL_GAME, 100).level, 100);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level, /Level should not be negative number/);
  });

  it(`should not allow set non number values`, () => {
    assert.throws(() =>changeLevel(INITIAL_GAME, []).level, /Level should be of type number/);
    assert.throws(() =>changeLevel(INITIAL_GAME, null).level, /Level should be of type number/);
    assert.throws(() =>changeLevel(INITIAL_GAME, undefined).level, /Level should be of type number/);
  });
});

describe(`Check points function`, () => {
  it(`check that the user answered 10 questions`, () => {
    assert.equal(answersNumber, 10);
  });
  it(`check answers speed and lives`, () => {
    assert.throws(() =>checkAnswerSpeed(answerSpeed), /Speed should be more then 5000ms/);
    // console.log(checkAnswerSpeed);
    // console.log(answerSpeed);

    // console.log(checkAnswerSpeed(answerSpeed));
    assert.equal(lives, 3);
  });
});

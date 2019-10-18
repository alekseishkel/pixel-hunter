
const assert = require(`chai`).assert;
const {changeLevel, INITIAL_GAME, userAnswers, countScore, countLives} = require(`../game-data`);

describe(`Check level changer`, () => {
  it(`should update level of the game`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 1).level, 1);
    assert.equal(changeLevel(INITIAL_GAME, 10).level, 10);
    assert.equal(changeLevel(INITIAL_GAME, 100).level, 100);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level, /Level should not be negative value/);
  });

  it(`should not allow set non number values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, []).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_GAME, {}).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_GAME, null).level, /Level should be of type number/);
    assert.throws(() => changeLevel(INITIAL_GAME, undefined).level, /Level should be of type number/);
  });
});

describe(`Check points counter`, () => {
  it(`should count score`, () => {
    assert.equal(countScore(userAnswers, 1), 500);
    assert.equal(countScore(userAnswers, 10), 950);
  });

  it(`should be game over if there are 0 lives`, () => {
    assert.equal(countScore(userAnswers, 0), -1);
  });

  it(`lives should not be negative values`, () => {
    assert.throws(() => countScore(userAnswers, -1), /Lives should not be negative value/);
  });

  it(`lives should be a type of number`, () => {
    assert.throws(() => countScore(userAnswers, []), /Lives should be of type number/);
    assert.throws(() => countScore(userAnswers, {}), /Lives should be of type number/);
    assert.throws(() => countScore(userAnswers, null), /Lives should be of type number/);
    assert.throws(() => countScore(userAnswers, undefined), /Lives should be of type number/);
  });
});

describe(`Check lives counter`, () => {
  it(`should subtract one live if answer is wrong`, () => {
    assert.equal(countLives(userAnswers), 2);
  });

  it(`user answers should not negative values`, () => {
    assert.throws(() => countLives(-1), /User answers should not be negative value, it should be object/);
  });

  it(`user answers should be of type object`, () => {
    assert.throws(() => countLives(null), /User answers should not be null, it should be object/);
    assert.throws(() => countLives(undefined), /User answers should not be undefined, it should be object/);
  });
});

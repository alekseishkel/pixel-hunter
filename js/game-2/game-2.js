import {subtractOneLife} from './header.js';
import {activateThirdScreen} from './game-3.js';
import makeAScreenTemplate from './screen.js';
import {initialState, level, answersMap} from './data-structure.js';
import {gameResult} from './game-result.js';

const images = Array.from(level[2].questions.images);
const numberOfGameScreen = 2;

const activateScreen = () => {
  const gameAnswer = document.querySelectorAll(`.game__answer > input`);
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
    const picture = elem.parentElement.parentElement.firstElementChild;
    let isCorrectAnswer;
    let showStats;

    answersMap.set(picture.src, {
      answer: gameAnswerBackgroundImage.backgroundImage,
      time: 15000
    });

    if (answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
      subtractOneLife();
      isCorrectAnswer = false;
      showStats = false;
      gameResult(showStats, isCorrectAnswer, picture);
    } else {
      isCorrectAnswer = true;
      showStats = false;
      gameResult(showStats, isCorrectAnswer, picture);
    }

    if (initialState.lives === 0) {
      showStats = true;
      gameResult(true);
    } else {
      makeAScreenTemplate(images, numberOfGameScreen, activateThirdScreen);
    }
  }));
};

export {activateScreen as activateSecondScreen};

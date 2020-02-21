import {activateThirdScreen} from './game-3.js';
import statsElement from './stats.js';
import {subtractOneLife} from './header.js';
import {initialState, level, answersMap} from './data-structure.js';
import makeAScreenTemplate from './screen.js';
import {showScreen, removeGameElement} from './util.js';
import {gameResult} from './game-result.js';
import {pictureOne} from './game-1.js';

const images = Array.from(level[2].questions.images);
const numberOfGameScreen = 2;

const activateScreen = () => {
  const gameAnswer = document.querySelectorAll(`.game__answer > input`);
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    const gameAnswerBackgroundImage = elem.nextElementSibling.currentStyle || window.getComputedStyle(elem.nextElementSibling, null);
    const picture = elem.parentElement.parentElement.firstElementChild;
    let isCorrectAnswer;

    answersMap.set(picture.src, {
      answer: gameAnswerBackgroundImage.backgroundImage,
      time: 15000
    });

    if (answersMap.get(picture.src).answer !== level[numberOfGameScreen - 1].answers.get(picture.src)) {
      subtractOneLife();
      isCorrectAnswer = false;
      gameResult(isCorrectAnswer, picture);
    } else {
      isCorrectAnswer = true;
      gameResult(isCorrectAnswer, picture);
    }

    if (initialState.lives === 0) {
      removeGameElement();
      showScreen(statsElement, picture);
    } else {
      makeAScreenTemplate(images, numberOfGameScreen, activateThirdScreen);
    }
  }));
};

export {activateScreen as activateSecondScreen};

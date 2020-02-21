import {removeGameElement, showScreen} from './util.js';
import statsElement from './stats.js';
import {subtractOneLife} from './header.js';
import {level, answersMap} from './data-structure.js';
import {gameResult} from './game-result.js';

const numberOfGameScreen = 3;

const activateScreen = () => {
  const gameAnswer = document.querySelectorAll(`.game__option`);
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    const picture = elem.firstElementChild;
    console.log(picture);
    console.log(answersMap);
    if (level[numberOfGameScreen - 1].answers.get(picture.src)) {
      answersMap.set(picture.src, {
        answer: true,
        time: 10000
      });
      gameResult(answersMap.get(picture.src).answer, picture.src);
    } else {
      answersMap.set(elem.firstElementChild.src, {
        answer: false,
        time: 10000
      });
      subtractOneLife();
      gameResult(answersMap.get(picture.src).answer, picture.src);
    }

    // const statsInGameScreen = document.querySelector(`ul.stats`);
    removeGameElement();
    gameResult();
    // showScreen(statsElement);

    // const statsInGameScreenCopy = statsInGameScreen.cloneNode(true);
    // const statsInStatsScreen = document.querySelector(`.result__table > tbody > tr > td`);
    // statsInStatsScreen.appendChild(statsInGameScreenCopy);
  }));
};

export {activateScreen as activateThirdScreen};

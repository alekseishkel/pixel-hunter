import {subtractOneLife} from './header.js';
import {level, answersMap} from './data-structure.js';
import {gameResult} from './game-result.js';

const numberOfGameScreen = 3;
let showStats;

const activateScreen = () => {
  const gameAnswer = document.querySelectorAll(`.game__option`);
  gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
    const picture = elem.firstElementChild;
    if (level[numberOfGameScreen - 1].answers.get(picture.src)) {
      answersMap.set(picture.src, {
        answer: true,
        time: 10000
      });
    } else {
      answersMap.set(elem.firstElementChild.src, {
        answer: false,
        time: 10000
      });
      subtractOneLife();
    }

    showStats = true;
    gameResult(showStats, answersMap.get(picture.src).answer, picture);
  }));
};

export {activateScreen as activateThirdScreen};

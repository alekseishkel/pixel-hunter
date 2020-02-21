import {answersMap} from './data-structure.js';
import {removeGameElement, showScreen} from './util.js';
import statsElement from './stats.js';
import {initialState} from './data-structure.js';

const screenStatsTemplate = `
    <li class="stats__result stats__result--wrong"></li>
    <li class="stats__result stats__result--slow"></li>
    <li class="stats__result stats__result--correct"></li>
    <li class="stats__result stats__result--fast"></li>`;

const POINTS_COUNT = {
  trueAnswerScore: 100,
  fastAnswerScore: 50,
  slowAnswerScore: 50,
  oneLiveScore: 50,
  slowSpeed: 15000,
  fastSpeed: 5000
};

const gameResult = (answer, screenPicture) => {
  console.log(screenPicture);
  const statsInGameScreen = document.querySelector(`.stats__result--unknown`);

  if (answer === true) {
    if (answersMap.get(screenPicture.src).time <= POINTS_COUNT.fastSpeed) {
      statsInGameScreen.className = `stats__result stats__result--fast`;
    } else if (answersMap.get(screenPicture.src).time >= POINTS_COUNT.slowSpeed) {
      statsInGameScreen.className = `stats__result stats__result--slow`;
    } else {
      statsInGameScreen.className = `stats__result stats__result--correct`;
    }
  } else {
    statsInGameScreen.className = `stats__result stats__result--wrong`;
  }

  if (initialState.lives === 0) {
    showScreen(statsElement);
  }
};

export {gameResult, POINTS_COUNT};

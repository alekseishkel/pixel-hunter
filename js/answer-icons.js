import {answersMap} from './data-structure.js';

const pasteAnswersIcon = (answer) => {
  const statsInGameScreen = document.querySelector(`.stats`);
  console.log(answer);
  // statsInGameScreen.insertAdjacentHTML(`afterbegin`, `<li class="stats__result stats__result--fast"></li>`);

  // answersMap.get(picture.src).answer;
};

export default pasteAnswersIcon;

import {createDomElement, showScreen} from './util.js';
import {initialState} from './data-structure.js';
import {POINTS_SCORE} from './game-result.js';

const showStatsScreen = (result, POINTS_COUNT) => {
  const template = `
  <div class="result">
  <h1>${result}</h1>
  <table class="result__table">
    <tr>
      <td colspan="2">
      </td>
      <td class="result__points">×&nbsp;${POINTS_SCORE.trueAnswerScore}</td>
      <td class="result__total">${POINTS_COUNT.trueAnswer.points}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${POINTS_COUNT.fastAnswer.count}&nbsp;<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;${POINTS_SCORE.fastAnswerScore}</td>
      <td class="result__total">${POINTS_COUNT.fastAnswer.points}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${initialState.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
      <td class="result__points">×&nbsp;${POINTS_SCORE.oneLiveScore}</td>
      <td class="result__total">${POINTS_COUNT.oneLive.points}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${POINTS_COUNT.slowAnswer.count}&nbsp;<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;${POINTS_SCORE.slowAnswerScore}</td>
      <td class="result__total">${POINTS_COUNT.slowAnswer.points}</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">${POINTS_COUNT.scores.points}</td>
    </tr>
  </table>
  </div>`;

  const element = createDomElement(template);

  showScreen(element);
};

export default showStatsScreen;

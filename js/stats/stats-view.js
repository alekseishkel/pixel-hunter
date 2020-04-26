import AbstractView from '../abstract-view.js';
import changeImageSizes from '../change-images-sizes.js';

export default class StasView extends AbstractView {
  constructor(result, POINTS_COUNT, POINTS_SCORE, initialState) {
    super();
    this.result = result;
    this.POINTS_COUNT = POINTS_COUNT;
    this.POINTS_SCORE = POINTS_SCORE;
    this.initialState = initialState;
  }

  get template() {
    return `<div class="result">
    <h1>${this.result}</h1>
    <table class="result__table">
      <tr>
        <td colspan="2">
        </td>
        <td class="result__points">×&nbsp;${this.POINTS_SCORE.trueAnswerScore}</td>
        <td class="result__total">${this.POINTS_COUNT.trueAnswer.points}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${this.POINTS_COUNT.fastAnswer.count}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${this.POINTS_SCORE.fastAnswerScore}</td>
        <td class="result__total">${this.POINTS_COUNT.fastAnswer.points}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.initialState.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${this.POINTS_SCORE.oneLiveScore}</td>
        <td class="result__total">${this.POINTS_COUNT.oneLive.points}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${this.POINTS_COUNT.slowAnswer.count}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;${this.POINTS_SCORE.slowAnswerScore}</td>
        <td class="result__total">${this.POINTS_COUNT.slowAnswer.points}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.POINTS_COUNT.scores.points}</td>
      </tr>
    </table>
    </div>`;
  }

  changeSizes() {
    const numberOfGameScreen = 3;
    changeImageSizes(numberOfGameScreen);
  }

  bind() {
    const gameAnswer = this.element.querySelectorAll(`.game__answer > input`);
    gameAnswer.forEach((elem) => elem.addEventListener(`click`, () => {
      this.onClick(elem);
    }));
  }

  onClick() {

  }
}

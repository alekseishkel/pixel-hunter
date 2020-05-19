import AbstractView from '../abstract-view.js';
import changeImageSizes from '../change-images-sizes.js';

export default class StasView extends AbstractView {
  constructor(result, POINTS_COUNT, POINTS_SCORE, model) {
    super();
    this.result = result;
    this.POINTS_COUNT = POINTS_COUNT;
    this.POINTS_SCORE = POINTS_SCORE;
    this.model = model;
  }

  get template() {
    return `<div class="result">
    <h1>${this.result}</h1>
    <table class="result__table">
      <tr>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
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
        <td class="result__extra">${this.model.state.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
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
    <a href="" class="last__results" style="font-size: 30px">Показать последние результаты</a>
    </div>`;
  }

  changeSizes() {
    const numberOfGameScreen = 3;
    changeImageSizes(numberOfGameScreen);
  }

  bind() {
    const lastResults = this.element.querySelector(`.last__results`);
    lastResults.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClick();
    });
  }

  onClick() {

  }
}

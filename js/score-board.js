import AbstractView from './abstract-view.js';

export default class ScoreBoard extends AbstractView {
  constructor(scores) {
    super();
    this.scores = scores;
  }

  get template() {
    return `
    <h1>Последние результаты игрока ${this.scores[0].name}:</h1>
    <table class="scores" style="width: 100%; font-size: 30px">
      ${this.scores.map((elem, index) =>
        `<tr>
          <td style="width: 10%">${index + 1}.</td>
          <td style="width: 30%"> ${elem._state.time} сек</td>
          <td style="width: 30%">
            ${new Array(3 - elem._state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``).concat(new Array(elem._state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``))}
          </td>
          <td style="width: 30%; text-align: center">
            ${new Intl.DateTimeFormat(`ru-RU`).format(new Date(elem.date))}
          </td>
        </tr>`
      ).join(``)}
    </table>`;
  }
}

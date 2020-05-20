import AbstractView from './abstract-view.js';

export default class ErrorScreen extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
    <div style="margin: 100px 0; font-size: 40px">
      <p style="margin: 0">Произошла ошибка: ${this.error.message}</p>
    </div>`;
  }
}

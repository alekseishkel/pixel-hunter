import AbstractView from './abstract-view.js';

export default class LoadingScreen extends AbstractView {
  constructor() {
    super();
    this.text = `Идет загрузка`;
    this.symbol = `.`;
    this.element.firstElementChild.textContent = this.text;
    this.counter = 0;
  }

  get template() {
    return `<div style="width: 305px; position: absolute; top: 50vh; transform: translate(-50%); font-size: 40px"></div>`;
  }

  start() {
    if (this.counter < 3) {
      this.element.firstElementChild.textContent += this.symbol;
      this.counter++;
    } else {
      this.element.firstElementChild.textContent = this.text;
      this.counter = 0;
    }

    this.timeout = setTimeout(() => this.start(), 800);
  }

  stop() {
    clearTimeout(this.timeout);
  }
}

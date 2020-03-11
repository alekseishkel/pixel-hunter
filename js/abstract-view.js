import {createDomElement} from './util.js';

export default class AbstracrtView {
  constructor() {
    if (new.target === AbstracrtView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  render(template) {
    const wrapper = document.createElement(`div`);
    wrapper.insertAdjacentHTML(`afterbegin`, template);
    return wrapper;
  }

  bind(element) {

  }

  get element() {
    if (this.element) {
      return this.element;
    }
    this.element = this.render();
    this.bind(this._element);
    return this.element;
  }
}

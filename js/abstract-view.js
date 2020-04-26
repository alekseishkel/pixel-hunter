export default class AbstracrtView {
  constructor() {
    if (new.target === AbstracrtView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  render() {
    const wrapper = document.createElement(`div`);

    wrapper.insertAdjacentHTML(`afterbegin`, this.template);

    return wrapper;
  }

  bind(element) {

  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }
}

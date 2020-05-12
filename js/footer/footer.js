import FooterView from './footer-view.js';

class FooterPresenter {
  constructor() {
    this.footer = new FooterView();
  }

  get element() {
    return this.footer.element;
  }
}

export default FooterPresenter;

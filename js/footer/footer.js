import FooterView from './footer-view.js';

// const footerView = new FooterView();

class FooterPresenter {
  constructor() {
    this.footer = new FooterView();
  }

  get element() {
    return this.footer.element;
  }
}

export default FooterPresenter;

import Application from '../application.js';
import GreetingView from './greeting-view.js';

class GreetingPresenter {
  constructor(model) {
    this.model = model;
    this.main = new GreetingView();
  }

  get element() {
    return this.main.element;
  }

  onArrowClick() {
    this.main.onClick = () => {
      this.model.nextScreen();

      Application.showRules();
    };
  }
}

export default GreetingPresenter;

import Application from '../application.js';
import IntroView from './intro-view.js';

class IntroPresenter {
  constructor(model) {

    this.model = model;
    this.main = new IntroView();
  }

  get element() {
    return this.main.element;
  }

  onAsteriskClick() {
    this.main.onClick = () => {
      this.model.nextScreen();

      Application.showGreeting();
    };
  }
}

export default IntroPresenter;

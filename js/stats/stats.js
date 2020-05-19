import {POINTS_SCORE, pointsCount, finalResult} from '../game-result.js';
import StatsView from './stats-view.js';
import Application from '../application.js';

class StatsPresenter {
  constructor(model) {
    this.model = model;
    this.result = finalResult(this.model);
    this.main = new StatsView(this.result, pointsCount, POINTS_SCORE, this.model);
  }

  get element() {
    return this.main.element;
  }

  onLastResultsClick() {
    this.main.onClick = () => {
      Application.showScoreLoading();
    };
  }
}

export default StatsPresenter;

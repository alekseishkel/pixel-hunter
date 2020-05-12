import {POINTS_SCORE, pointsCount, finalResult} from '../game-result.js';
import StatsView from './stats-view.js';

class StatsPresenter {
  constructor(model) {
    this.model = model;
    this.result = finalResult(this.model);
    this.main = new StatsView(this.result, pointsCount, POINTS_SCORE, this.model);
  }

  get element() {
    return this.main.element;
  }
}

export default StatsPresenter;

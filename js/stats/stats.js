import {POINTS_SCORE, pointsCount} from '../game-result.js';
import {initialState} from '../data-structure.js';
import StatsView from './stats-view.js';

const makeStatsView = (result) => {
  const statsView = new StatsView(result, pointsCount, POINTS_SCORE, initialState);
  return statsView;
};

export default makeStatsView;

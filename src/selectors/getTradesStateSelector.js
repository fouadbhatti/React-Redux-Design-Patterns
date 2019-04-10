import { createSelector } from 'reselect'
import _ from 'lodash';

const select = (state) => state.trades.trades;

const getTradesStateSelector = createSelector(select, (trades) => {
  const denormalized = Object.values(trades);
  const ordered = _.orderBy(denormalized, 'mts', 'desc');
  return _.take(ordered, 10);
});

export default getTradesStateSelector;
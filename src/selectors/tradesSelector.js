import { createSelector } from 'reselect'
import _ from 'lodash';

const selectTrades = response => {
  const [channelId, tradesSnapshot, singleTradeUpdate ] = response;
  return { tradesSnapshot, singleTradeUpdate };
};

const format = (array) => {
  return _.reduce(array, (accumulator, current) => {
    const [ id, mts, amount, price ] = current;
    accumulator.trades[id] = { id, mts, amount: Math.abs(amount), price };
    accumulator.allIds.push(id);
    return accumulator;
  }, { trades: {}, allIds: []});
};

const tradesSelector = createSelector(selectTrades, ({ tradesSnapshot, singleTradeUpdate = [] }) => {
  const isSnapShot = Array.isArray(tradesSnapshot);
  if (isSnapShot) return format(tradesSnapshot);
  return format([singleTradeUpdate]);
});

export default tradesSelector;
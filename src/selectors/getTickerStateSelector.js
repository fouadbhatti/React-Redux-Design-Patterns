import { createSelector } from 'reselect'

const select = (state) => {
  return {
    dailyChangePerc: state.ticker.dailyChangePerc,
    lastPrice: state.ticker.lastPrice,
    volume: state.ticker.volume,
    high: state.ticker.high,
    low: state.ticker.low,
  };
};

const getTradesStateSelector = createSelector(select, (data) => data);

export default getTradesStateSelector;
import { createSelector } from 'reselect'

const selectTicker = response => {
  const [channelId, data] = response;
  return data;
};

const tickerSelector = createSelector(selectTicker, (data) => {
  const [
    bid,
    bidSize,
    ask,
    askSize,
    dailyChange,
    dailyChangePerc,
    lastPrice,
    volume,
    high,
    low,
  ] = data;

  return {
    dailyChangePerc,
    lastPrice,
    volume,
    high,
    low,
  };
});

export default tickerSelector;
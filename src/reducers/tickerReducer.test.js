import tickerReducer from './tickerReducer'
import * as types from '../constants/actionTypes';

describe('ticker reducer', () => {
  const initialState = {};

  it('should return the initial state', () => {
    const actual = tickerReducer(undefined, {});

    expect(actual).toEqual(initialState);
  });

  it('should handle UPDATE_TICKER', () => {
    const payload = {
      dailyChangePerc: 0.008,
      high: 5330,
      lastPrice: 5298.9,
      low: 5185.1,
      volume: 6566.60940907
    };

    const action = {
      type: types.UPDATE_TICKER,
      payload
    };

    const actual = tickerReducer(initialState, action);

    expect(actual).toEqual(payload);
  });
});
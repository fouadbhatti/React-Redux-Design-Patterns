import * as actions from './actions';
import * as types from '../constants/actionTypes';

describe('Action Tests', () => {
  it('should create an action to fetchTicker', () => {
    const payload = {
      hello: 'Hello World'
    };

    const expectedAction = {
      type: types.FETCH_TICKER,
      payload
    };

    expect(actions.fetchTicker(payload)).toEqual(expectedAction);
  });


  it('should create an action to updateTicker', () => {
    const payload = {
      hello: 'Hello World'
    };

    const expectedAction = {
      type: types.UPDATE_TICKER,
      payload
    };

    expect(actions.updateTicker(payload)).toEqual(expectedAction);
  });


  it('should create an action to fetchTrades', () => {
    const payload = {
      hello: 'Hello World'
    };

    const expectedAction = {
      type: types.FETCH_TRADES,
      payload
    };

    expect(actions.fetchTrades(payload)).toEqual(expectedAction);
  });

  it('should create an action to updateTrades', () => {
    const payload = {
      hello: 'Hello World'
    };

    const expectedAction = {
      type: types.UPDATE_TRADES,
      payload
    };

    expect(actions.updateTrades(payload)).toEqual(expectedAction);
  });

  it('should create an action to disconnect', () => {

    const expectedAction = {
      type: types.DISCONNECT,
    };

    expect(actions.disconnect()).toEqual(expectedAction);
  });

  it('should create an action to disconnected', () => {

    const expectedAction = {
      type: types.DISCONNECTED,
    };

    expect(actions.disconnected()).toEqual(expectedAction);
  });

  it('should create an action to fetch', () => {

    const expectedAction = {
      type: types.FETCH,
    };

    expect(actions.fetch()).toEqual(expectedAction);
  });
});
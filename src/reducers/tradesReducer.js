import * as actions from '../constants/actionTypes';
import dotProp from 'dot-prop-immutable';
import _ from 'lodash';

const initialState = {
  trades: {

  },
  allIds: [

  ]
};

const updateTrades = (state, action) => {
  const { payload } = action;

  const updatedWithTradesState = dotProp.merge(
    state,
    `trades`,
    payload.trades
  );

  const updatedWithTradesList = dotProp.set(
    updatedWithTradesState,
    `allIds`,
    allIds => _.uniq(allIds.concat(payload.allIds))
  );

  return updatedWithTradesList;
};

export const tradesReducer = (state = initialState, action) => {
  if (action.type === actions.UPDATE_TRADES) {
    return updateTrades(state, action);
  }
  return state;
};

export default tradesReducer;
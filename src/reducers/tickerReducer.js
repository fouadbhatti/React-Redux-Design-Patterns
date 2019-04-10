import * as types from '../constants/actionTypes';

const initialState = {};

const tickerReducer = (state = initialState, action) => {
  if (action.type === types.UPDATE_TICKER) {
    return {
      ...state,
      ...action.payload
    }
  }
  return state;
};

export default tickerReducer;
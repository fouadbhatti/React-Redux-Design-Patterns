import { combineReducers } from 'redux';
import tickerReducer from './tickerReducer';
import tradesReducer from './tradesReducer'

const rootReducer = combineReducers({
  ticker: tickerReducer,
  trades: tradesReducer
});

export default rootReducer;
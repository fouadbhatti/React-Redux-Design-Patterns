import { combineEpics } from 'redux-observable';
import { fetchTickerEpic } from './tickerEpics';
import { fetchTradesEpic } from './tradesEpic';
import { disconnectEpic, fetchEpic } from './genericEpics';


const rootEpic = combineEpics(
  fetchTickerEpic,
  fetchTradesEpic,
  disconnectEpic,
  fetchEpic
);

export default rootEpic;